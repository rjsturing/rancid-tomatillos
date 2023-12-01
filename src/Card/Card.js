import './Card.css';

function Card({title, poster, id}) {
  console.log("Poster Path:", poster);

  return (
    <div className='card'>
      <img className='movie-poster' src={poster} alt={title} />
      <h2>{title}</h2>
    </div>
  )
}

export default Card;
