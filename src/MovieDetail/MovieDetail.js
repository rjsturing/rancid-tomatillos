import React from 'react';
import './MovieDetail.css';

function MovieDetail({ movie }) {
    return (
      <div className="movie-detail">
        <img className="backdrop" src={movie.backdrop_path} alt={`${movie.title} backdrop`} />
        <img className="poster" src={movie.poster_path} alt={`${movie.title} poster`} />
        <h2>{movie.title}</h2>
        <p>Release Date: {movie.release_date}</p>
        <p>Average Rating: {movie.average_rating}</p>
      </div>
    );
  }
  
  export default MovieDetail;