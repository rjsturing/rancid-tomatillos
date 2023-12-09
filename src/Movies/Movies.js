import React from 'react';
import PropTypes from 'prop-types';
import './Movies.css';
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import Card from '../Card/Card';
import { getAllMovies } from "../apiCalls";

function Movies() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    getAllMovies()
      .then((data) => setMovies(data.movies))
      .catch((error) => {
        console.error(error);
        setError(`Oopsie! Something went wrong, please try again later.`);
      });
  }, []);

  if (movies.length === 0) {
    return <div>Loading movies...</div>;
  }

  const movieCards = movies.map(movie => {
    return (
      <Link className='movie-card-link' key={movie.id} to={`/movies/${movie.id}`}>
        <Card
          id={movie.id}
          key={movie.id}
          title={movie.title}
          poster={movie.poster_path}
          rating={movie.average_rating}
          release={movie.release_date}
        />
      </Link>
    );
  });

  return (
    <div className='movies-container'>
      {movieCards}
    </div>
  );
}

Movies.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({
    average_rating: PropTypes.number,
    backdrop_path: PropTypes.string,
    id: PropTypes.number,
    poster_path: PropTypes.string,
    release_date: PropTypes.string,
    title: PropTypes.string
  }))
}

export default Movies;
