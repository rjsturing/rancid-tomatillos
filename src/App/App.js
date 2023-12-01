import './App.css';
import movieData from '../mock-data';
import { useState } from 'react';

function App() {
  const [movies, setMovies] = useState([]);

  return (
    <main className='App'>
      <header>
        <h1>Rancid Tomatillos</h1>
      </header>
    </main>
  )
}

export default App;
