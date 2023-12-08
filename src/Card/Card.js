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
  id: PropTypes.number,
  title: PropTypes.string,
  poster: PropTypes.string,
  rating: PropTypes.number,
  release: PropTypes.string
};

export default Card;