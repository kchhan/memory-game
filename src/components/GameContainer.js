import React from 'react';
import CardInstance from './CardInstance'

import '../style.css'

function GameContainer({data}) {
  return <section className="game-container">
      {data.map((cardData)=>{
        return <CardInstance key={cardData.id} cardData={cardData}/>
      })}
  </section>
}

export default GameContainer;
