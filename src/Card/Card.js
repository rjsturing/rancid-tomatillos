import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

function Card({ title, poster, id, onClick }) {
  return (
    <div className='card' onClick={onClick}>
      <img className='movie-poster' src={poster} alt={title} />
      <h2>{title}</h2>
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