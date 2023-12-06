import { useState, useEffect } from "react";
import "./App.css";
import Movies from "../Movies/Movies";
import MovieDetailWrapper from "../MovieDetail/MovieDetailWrapper";
import { getAllMovies } from "../apiCalls";
import { Routes, Route, useNavigate } from "react-router-dom";

function App() {
  const [movies, setMovies] = useState([]);
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

  const selectMovie = (movieId) => {
    navigate(`/movies/${movieId}`);
  };

  return (
    <main className="App">
      <header>
        <h1>Rancid Tomatillos</h1>
      </header>
      <Routes>
        <Route
          path="/"
          element={
            error ? (
              <div className="error-message">{error}</div>
            ) : (
              <Movies movies={movies} selectMovie={selectMovie} /> // Passing the selectMovie function
            )
          }
        />
        <Route path="/movies/:id" element={<MovieDetailWrapper />} />
      </Routes>
    </main>
  );
}

export default App;