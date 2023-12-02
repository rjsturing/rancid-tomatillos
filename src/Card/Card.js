import './Card.css';

function Card({ title, poster, id, onClick }) {
  return (
    <div className='card' onClick={onClick}>
      <img className='movie-poster' src={poster} alt={title} />
      <h2>{title}</h2>
    </div>
  );
}

export default Card;
