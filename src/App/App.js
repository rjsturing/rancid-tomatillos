import { useState, useEffect } from "react";
import "./App.css";
import Movies from "../Movies/Movies";
import MovieDetail from "../MovieDetail/MovieDetail";
import { getAllMovies, getSelectedMovie } from "../apiCalls";
import { Routes, Route } from 'react-router-dom';

function App() {
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

  const mainStyle = selectedMovie
    ? { backgroundImage: `url(${selectedMovie.backdrop_path})` }
    : {};

  const selectMovie = (id) => {
    getSelectedMovie(id)
      .then(data => {
        console.log(data)
        setSelectedMovie(data.movie);
      })
      .catch((error) => {
        console.error(error);
        setError(`Oopsie! Something went wrong, please try again later.`);
      })
  };

  const clearMovieSelection = () => {
    setSelectedMovie(null);
  };

  return (
    <main className={`App ${selectedMovie ? "show-selected" : ""}`} style={mainStyle}>
      <header>
        <h1>Rancid Tomatillos</h1>
      </header>
      <Routes>
        <Route
          path="/"
          element={
            error ? (
              <div className="error-message">{error}</div>
            ) : selectedMovie ? (
              <MovieDetail
                movie={selectedMovie}
                clearMovieSelection={clearMovieSelection}
              />
            ) : (
              <Movies movies={movies} selectMovie={selectMovie} />
            )
          }
        />
      </Routes>
    </main>
  );
}

export default App;
