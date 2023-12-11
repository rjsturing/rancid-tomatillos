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

  const tomatilloIcon = Array.from({ length: selectedMovie.average_rating }, (_, index) => (
    <img
      key={index}
      className="tomatillo-icon"
      src="/tomatillo-icon.png"
      alt="Tomatillo"
    />
  ));

  return (
    <div className="movie-detail show-selected" style={mainStyle}>
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
          <b>{selectedMovie.average_rating}</b>
          <span className="custom-font"> Tomatillos {tomatilloIcon}</span>
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