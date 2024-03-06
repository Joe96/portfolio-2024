import React from 'react';
import './../styles/cards.css'

const Card = ({ img, title, description }) => {
  return (
    <div className="card">
        {img && <img src={img} alt={title} />} 
        <h3>{title}</h3>
        <p>{description}</p>
    </div>
  );
};

export default Card;
