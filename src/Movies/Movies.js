import './Movies.css';
import { useState, useEffect } from "react";
import { useParams, Link } from 'react-router-dom';
import Card from '../Card/Card';
import MovieDetail from '../MovieDetail/MovieDetail';
import { getAllMovies, getSelectedMovie } from "../apiCalls";

function Movies() {
  const { id } = useParams();
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
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
      <Link key={movie.id} to={`/movies/${movie.id}`}>
        <Card
          id={movie.id}
          key={movie.id}
          title={movie.title}
          poster={movie.poster_path}
          rating={movie.average_rating}
          release={movie.release_date}
          // onClick={() => setSelectedMovie(movie)}
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

export default Movies;
