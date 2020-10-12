import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import GameContainer from './components/GameContainer';

import './style.css';

function App() {
  const [data, setData] = useState([]);
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  // uses javascript fetch to retrieve json data from public directory
  const getData = () => {
    fetch('./flags.json', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then(function (res) {
        return res.json();
      })
      .then(function (jsonData) {
        setData(jsonData);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  const handleChange = (clickedCard) => {
    const card = clickedCard;

    // checks value of card if already clicked or not
    if (data[card.id - 1].clicked) {
      // card.clicked is already true. end current game

      // reset current score
      setCurrentScore(0);
      // reset all cards so clicked is false
      const newData = data;
      newData.map((card) => {
        return (card.clicked = false);
      });
      setData(newData);
      // shuffle grid
      shuffle();
      return;
    } else {
      // card has not been clicked yet. continue
      const newData = data;
      newData[card.id - 1].clicked = true;
      setData(newData);
      // increase score
      const newCurrentScore = currentScore + 1;
      setCurrentScore(newCurrentScore);
      // set new best score if applies
      if (newCurrentScore > bestScore) {
        setBestScore(newCurrentScore);
      }
      // shuffle grid
      shuffle();
      return;
    }
  };

  // fisher-yates shuffle algorithm
  const shuffle = () => {
    const newData = data;
    let currentIndex = newData.length,
      temporaryValue,
      randomIndex;

    // while there remail elements to shuffle
    while (0 !== currentIndex) {
      // pick a remaining element
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // swap it with the current element
      temporaryValue = newData[currentIndex];
      newData[currentIndex] = newData[randomIndex];
      newData[randomIndex] = temporaryValue;
    }
    return newData;
  };

  return (
    <main>
      <Header
        title={'Memory Game'}
        rules={
          'Get points by clicking on a flag but do not click on any more than once!'
        }
        currentScore={currentScore}
        bestScore={bestScore}
      />
      <GameContainer data={data} updateCard={handleChange} />
    </main>
  );
}

export default App;
