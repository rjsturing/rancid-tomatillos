import "./Card.css";

function Card({ poster, title, onClick }) {
  return (
    <div className="card" onClick={onClick}>
      <img
        className="movie-poster"
        src={poster}
        alt={`Movie Poster for ${title}`}
      />
    </div>
  );
}

export default Card;
