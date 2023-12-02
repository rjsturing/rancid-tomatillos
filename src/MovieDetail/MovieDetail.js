import React from 'react';
import './MovieDetail.css';

function MovieDetail({ movie, clearMovie}) {
    return (
      <div className="movie-detail">
        <img className="poster" src={movie.poster_path} alt={`${movie.title} poster`} />
        <img className="backdrop" src={movie.backdrop_path} alt={`${movie.title} backdrop`} />
        <h2>{movie.title}</h2>
        <p>Release Date: {movie.release_date}</p>
        <p>Average Rating: {Math.round(movie.average_rating * 10)}%</p>
        <button onClick={clearMovie} className="back-button">Back to Movies</button>
      </div>
    );
  }
  
  export default MovieDetail;