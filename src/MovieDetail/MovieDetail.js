import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getSelectedMovie } from "../apiCalls";
import "./MovieDetail.css";

function MovieDetail() {
  const { id } = useParams();
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [error, setError] = useState(null);

  // Fetch movie details based on the movie ID from the URL
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

  // prevent detail page from scrolling overflow
  useEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, []);
  //

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
        <h3>{`${selectedMovie.title} ${movieYear}`}</h3>
        <h2>"{`${selectedMovie.tagline}`}"</h2>
        <h1>{selectedMovie.genres.join(', ')}</h1>
        <p>Average Rating: {Math.round(selectedMovie.average_rating * 10)}%</p>
        <p>Runtime: {selectedMovie.runtime} minutes</p>
        <h1>
          <i>Synopsis: </i>
          {selectedMovie.overview}
        </h1>
      </div>
    </div>
  );
}

export default MovieDetail;
