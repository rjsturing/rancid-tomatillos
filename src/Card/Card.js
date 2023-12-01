import './Card.css';

function Card({title, poster_path, id}) {
  // code here

  return (
    <div className='card'>
      <img>{poster_path}</img>
      <h2>{title}</h2>
    </div>
  )
}

export default Card;
