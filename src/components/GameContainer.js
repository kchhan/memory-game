import React from 'react';
import CardInstance from './CardInstance';

function GameContainer({ data, updateCard }) {
  const updateCardGC = (card) => {
    updateCard(card);
  };

  return (
    <section className='game-container'>
      {data.map((cardData) => {
        return (
          <CardInstance
            key={cardData.id}
            cardData={cardData}
            updateCardCI={updateCardGC}
          />
        );
      })}
    </section>
  );
}

export default GameContainer;
