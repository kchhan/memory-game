import React from 'react';

function CardInstance({ cardData, updateCardCI }) {
  const handleClick = () => {
    const newCard = cardData;
    updateCardCI(newCard);
  };

  return (
    <div onClick={handleClick} className='card'>
      <img src={cardData.image} alt={cardData.country + 'flag'} />
      <div>
        <h3 className='country'>{cardData.country}</h3>
      </div>
    </div>
  );
}

export default CardInstance;

// find out how i can pass the props of a clicked card up too app.js and then change the state using set state there