import './Movies.css';
import Card from '../Card/Card';

function Movies({ movies, selectMovie }) {
  if (movies.length === 0) {
    return <div>Loading...</div>;
  }

  const movieCards = movies.map(movie => {
    return (
      <Card
        id={movie.id}
        key={movie.id}
        title={movie.title}
        poster={movie.poster_path}
        rating={movie.average_rating}
        release={movie.release_date}
        onClick={() => selectMovie(movie.id)}
      />
    );
  });

  return (
    <div className='movies-container'>
      {movieCards}
    </div>
  );
}

export default Movies;
