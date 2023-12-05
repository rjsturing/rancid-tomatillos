import { useState, useEffect } from "react";
import "./App.css";
import Movies from "../Movies/Movies";
import MovieDetail from "../MovieDetail/MovieDetail";

function App() {
  const [movies, setMovies] = useState(null);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [error, setError] = useState(null);

  const getAllMovies = () => {
    fetch("https://rancid-tomatillos.herokuapp.com/api/v2/movies")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Network response was not OK`);
        }
        return response.json();
      })
      .then((data) => setMovies(data.movies))
      .catch((error) => {
        console.error(error);
        setError(`Oopsie! Something went wrong, please try again later.`);
      });
  };

  useEffect(() => {
    getAllMovies();
  }, []);

  useEffect(() => {
    if (selectedMovie) {
      const mainElement = document.querySelector('.show-selected');
      mainElement.style.backgroundImage = `url(${selectedMovie.backdrop_path})`;
    } else {
      const mainElement = document.querySelector('.App');
      mainElement.style.backgroundImage = 'none';
    }
  }, [selectedMovie]);

  const selectMovie = (movie) => {
    setSelectedMovie(movie);
  };

  const clearMovieSelection = () => {
    setSelectedMovie(null);
  };

  return (
    <main className="App">
      <header>
        <h1>Rancid Tomatillos</h1>
      </header>
      {error && <div className="error-message">{error}</div>}
      {selectedMovie ? (
        <MovieDetail
          movie={selectedMovie}
          clearMovieSelection={clearMovieSelection}
        />
      ) : (
        <Movies movies={movies} selectMovie={selectMovie} />
      )}
    </main>
  );
}

export default App;
