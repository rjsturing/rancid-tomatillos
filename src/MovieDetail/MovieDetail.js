import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getSelectedMovie } from "../apiCalls";
import "./MovieDetail.css";

function MovieDetail() {
  const { id } = useParams();
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (id) {
      getSelectedMovie(id)
        .then((data) => {
          setSelectedMovie(data.movie);
        })
        .catch((error) => {
          console.error(error);
          setError(error.message);
        });
    }
  }, [id]);

  const mainStyle = selectedMovie
    ? { backgroundImage: `url(${selectedMovie.backdrop_path})` }
    : {};

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  if (!selectedMovie) {
    return <div>Loading movie details...</div>;
  }

  const movieYear = selectedMovie.release_date
    ? `(${new Date(selectedMovie.release_date).getFullYear()})`
    : "";

  return (
    <div className="movie-detail show-selected" style={mainStyle}>
      {/* <Link to={"/"}>
        <button className="back-button">
          <span className="custom-font">←</span>
        </button>
      </Link> */}
      <div className="left-side">
        <img
          className="poster"
          src={selectedMovie.poster_path}
          alt={`${selectedMovie.title} poster`}
        />
      </div>
      <div className="right-side">
        <h3>{`${selectedMovie.title} ${movieYear}`}</h3>
        <h2>{`${selectedMovie.tagline}`}</h2>
        <p>
          {selectedMovie.genres.join(", ")} • {selectedMovie.runtime} mins
        </p>
        <p>
          <img
            className="tomatillo-icon"
            src="/tomatillo-icon.png"
            alt="Tomatillo"
          />
          <b>{((selectedMovie.average_rating * 10) / 20).toFixed(1)}</b>
          <span className="custom-font"> Tomatillos</span>
        </p>
        <div className="synopsis-container">
          <b>
            <p>{selectedMovie.overview}</p>
          </b>
        </div>
      </div>
    </div>
  );
}

export default MovieDetail;