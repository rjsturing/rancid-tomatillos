import { useState, useEffect } from "react";
import "./App.css";
import Movies from "../Movies/Movies";
import MovieDetail from "../MovieDetail/MovieDetail";

function App() {
  const [movies, setMovies] = useState(null);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const getAllMovies = () => {
    fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
      .then(response => response.json())
      .then(data => setMovies(data.movies))
      .catch(error => console.log(error.message))
  }

  useEffect(() => {
    getAllMovies();
  }, []);

  useEffect(() => {
    if (selectedMovie) {
      document.body.style.background = `linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)), url(${selectedMovie.backdrop_path}) no-repeat center center fixed`;
      document.body.style.backgroundSize = 'cover';
    } else {
      document.body.style.background = '';
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
