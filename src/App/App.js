import './App.css';
import Movies from '../Movies/Movies';
import MovieDetail from '../MovieDetail/MovieDetail';
import Card from '../Card/Card';
import movieData from '../mock-data';
import { useState } from 'react';


function App() {
  const [selectedMovie, setSelectedMovie] = useState(null);


  const selectMovie = (movie) => {
    setSelectedMovie(movie);
  }

  const clearMovieSelection = () => {
    setSelectedMovie(null);
  }

  return (
    <main className='App'>
      <header>
        <h1>Rancid Tomatillos</h1>
      </header>
      {selectedMovie ? (
        <MovieDetail movie={selectedMovie} clearMovieSelection={clearMovieSelection} />
      ) : (
        <Movies movies={movieData.movies} selectMovie={selectMovie} />
      )}
    </main>
  );
}

export default App;