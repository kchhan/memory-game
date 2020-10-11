import React, {useState} from 'react';

function CardInstance({ cardData }) {

  const handleClick = e => {
    console.log('click')
  }

  return (
    <div onClick={handleClick} className="card">
      <img
        src={cardData.image}
        alt={cardData.country + 'flag'}
      />
      <div>
        <h3>{cardData.country}</h3>
      </div>
    </div>
  );
}

export default CardInstance;
