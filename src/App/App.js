import React from "react";
import { useState, useEffect } from "react";
import "./App.css";
import NotFound from "../NotFound/NotFound";
import Movies from "../Movies/Movies";
import MovieDetail from "../MovieDetail/MovieDetail";
import { Routes, Route } from "react-router-dom";
import { getAllMovies } from "../apiCalls";
import '../Fonts/Fonts.css';
import { Link } from 'react-router-dom';

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
        .then((data) => {
          setMovies(data.movies);
          setError(null);
        })
        .catch((error) => {
          console.error(error);
          setError(error.message);
        });
    }, []);

    return (
      <main className={`App ${selectedMovie ? "show-selected" : ""}`}>
        <header>
          <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
            <div className="logo">
              <img src="/tomatillo-icon.png" alt="Tomatillo Logo" />
            </div>
            <div className="header-title">
              <h1>Rancid Tomatillos</h1>
            </div>
          </Link>
        </header>
      {error && <div className="error-message">{error}</div>}
      <Routes>
        <Route
          path="/"
          element={<Movies movies={movies} selectMovie={selectMovie} />}
        />

        <Route
          path="/movies/:id"
          element={
            <MovieDetail
              movie={selectedMovie}
              clearMovieSelection={clearMovieSelection}
            />
          }
        />

        <Route path="/*" element={<NotFound />} />
      </Routes>
    </main>
  );
}

export default App;
