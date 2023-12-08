import React from "react";
import { useState, useEffect } from "react";
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
          setError(`Oopsie! Something went wrong, please try again later.`);
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

  return (
    <div className="movie-detail show-selected" style={mainStyle}>
      <Link to={"/"}>
        <button className="back-button">Back to Movies</button>
      </Link>
      <div className="left-side">
        <img
          className="poster"
          src={selectedMovie.poster_path}
          alt={`${selectedMovie.title} poster`}
        />
      </div>
      <div className="right-side">
        <h2>{selectedMovie.title}</h2>
        <p>Release Date: {selectedMovie.release_date}</p>
        <p>Average Rating: {Math.round(selectedMovie.average_rating * 10)}%</p>
      </div>
    </div>
  );
}

export default MovieDetail;
