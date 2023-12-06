import { useState, useEffect } from "react";
import "./App.css";
import Movies from "../Movies/Movies";
import MovieDetail from "../MovieDetail/MovieDetail";
import { getAllMovies, getSelectedMovie } from "../apiCalls";
import { Routes, Route, useParams, useNavigate } from 'react-router-dom';

function App() {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    getAllMovies()
      .then((data) => setMovies(data.movies))
      .catch((error) => {
        console.error(error);
        setError(`Oopsie! Something went wrong, please try again later.`);
      });
  }, []);

  const { id } = useParams();

  useEffect(() => {
    if (id) {
      getSelectedMovie(id)
        .then(data => {
          console.log("Movie Detail Data:", data);
          setSelectedMovie(data.movie);
        })
        .catch((error) => {
          console.error(error);
          setError(`Oopsie! Something went wrong, please try again later.`);
        });
    }
  }, [id]);

  const selectMovie = (movieId) => {
    navigate(`/movies/${movieId}`);
  };

  const clearMovieSelection = () => {
    setSelectedMovie(null);
  };

  const mainStyle = selectedMovie
    ? { backgroundImage: `url(${selectedMovie.backdrop_path})` }
    : {};

  return (
    <main className={`App ${selectedMovie ? "show-selected" : ""}`} style={mainStyle}>
      <header>
        <h1>Rancid Tomatillos</h1>
      </header>
      <Routes>
        <Route path="/" element={error ? (
          <div className="error-message">{error}</div>
        ) : (<Movies movies={movies} selectMovie={selectMovie} />)} />

        <Route path="/movies/:id" element={error ? (
          <div className="error-message">{error}</div>
        ) : (<MovieDetail movie={selectedMovie} clearMovieSelection={clearMovieSelection} />)} />
      </Routes>
    </main>
  );
}

export default App;
