import React from "react";
import PropTypes from "prop-types";
import "./Card.css";

function Card({ poster, title, rating, onClick }) {
  const tomatilloIcon = Array.from({ length: rating }, (_, index) => (
    <img
      key={index}
      className="tomatillo-icon"
      src="/tomatillo-icon.png"
      alt="Tomatillo"
    />
  ));

  return (
    <div className="card" onClick={onClick}>
      <img
        className="movie-poster"
        src={poster}
        alt={`Movie Poster for ${title}`}
      />
      <div className="tomatillo-count">{tomatilloIcon}</div>
    </div>
  );
}

Card.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  release: PropTypes.string.isRequired
};

export default Card;