import { useState, useEffect } from "react";
import "./App.css";
import Movies from "../Movies/Movies";
import MovieDetail from "../MovieDetail/MovieDetail";
import { Routes, Route } from 'react-router-dom';
import { getAllMovies } from '../apiCalls';

function App() {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [error, setError] = useState(null);

  const selectMovie = (movie) => {
    setSelectedMovie(movie);
  };

  const clearMovieSelection = () => {
    setSelectedMovie(null);
  };

  const mainStyle = selectedMovie
    ? { backgroundImage: `url(${selectedMovie.backdrop_path})` }
    : {};

    useEffect(() => {
      getAllMovies()
        .then((data) => setMovies(data.movies))
        .catch((error) => {
          console.error(error);
          setError(error.message);
        });
    }, []);

  return (
    <main className={`App ${selectedMovie ? "show-selected" : ""}`} style={mainStyle}>
      <header>
        <h1>Rancid Tomatillos</h1>
      </header>
      {error && (<div className="error-message">{error}</div>)}
      <Routes>
        <Route path="/" element={<Movies movies={movies} selectMovie={selectMovie} />} />
        <Route path="/movies/:id" element={<MovieDetail movie={selectedMovie} clearMovieSelection={clearMovieSelection} />} />
      </Routes>
    </main>
  );
}

export default App;
