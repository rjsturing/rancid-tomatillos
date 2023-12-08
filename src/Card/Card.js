import './Card.css';

function Card({ poster, onClick }) {
  return (
    <div className='card' onClick={onClick}>
      <img className='movie-poster' src={poster} alt="Movie Poster" />
    </div>
  );
}

export default Card;
