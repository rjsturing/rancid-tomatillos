import React from 'react';
import './MovieDetail.css';

function MovieDetail({ movie, clearMovieSelection }) {
  return (
    <div className="movie-detail">
      <img className="poster" src={movie.poster_path} alt={`${movie.title} poster`} />
      <h2>{movie.title}</h2>
      <p>Release Date: {movie.release_date}</p>
      <p>Average Rating: {Math.round(movie.average_rating * 10)}%</p>
      <button onClick={clearMovieSelection} className="back-button">Back to Movies</button>
    </div>
  );
}

export default MovieDetail;