import React from 'react';

function Header({ title, rules, currentScore, bestScore }) {
  return (
    <section className="header">
      <h1 className='title'>{title}</h1>
      <p className='rules'>{rules}</p>
      <div className='scores'>
        <div className='current-score'>Current Score: {currentScore}</div>
        <div className='best-score'>Best Score: {bestScore}</div>
      </div>
    </section>
  );
}

export default Header;
