import './App.css';
import Movies from '../Movies/Movies';
import Card from '../Card/Card';
import movieData from '../mock-data';
import { useState } from 'react';

function App() {
  const [movies, setMovies] = useState([]);

  return (
    <main className='App'>
      <header>
        <h1>Rancid Tomatillos</h1>
      </header>
      <Movies movieData={movieData.movies} />
    </main>
  )
}

export default App;
