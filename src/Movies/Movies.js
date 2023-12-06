import './Movies.css';
// import { useParams, Link } from 'react-router-dom';
import Card from '../Card/Card';

function Movies({ movies, selectMovie }) {
  // const { id } = useParams();
  if (movies.length === 0) {
    return <div>Loading movies...</div>;
  }

  const movieCards = movies.map(movie => {
    return (
      // <Link key={movie.id} to={`/movies/${id}`}>
        <Card
        id={movie.id}
        key={movie.id}
        title={movie.title}
        poster={movie.poster_path}
        rating={movie.average_rating}
        release={movie.release_date}
        onClick={() => selectMovie(movie.id)}
      />
      // </Link> 
    );
  });

  return (
    <div className='movies-container'>
      {movieCards}
    </div>
  );
}

export default Movies;
