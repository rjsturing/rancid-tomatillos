import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getSelectedMovie } from '../apiCalls';
import MovieDetail from './MovieDetail';

function MovieDetailWrapper() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (id) {
      getSelectedMovie(id)
        .then(data => {
          setMovie(data.movie);
        })
        .catch(error => {
          console.error(error);
          setError(`Oopsie! Something went wrong, please try again later.`);
        });
    }
  }, [id]);

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  if (!movie) {
    return <div>Loading movie details...</div>;
  }

  return <MovieDetail movie={movie} />;
}

export default MovieDetailWrapper;
