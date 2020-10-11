import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import GameContainer from './components/GameContainer';

// import { Container } from 'react-bootstrap';

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
        console.log(res);
        return res.json();
      })
      .then(function (jsonData) {
        console.log(jsonData);
        setData(jsonData);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <main>
      <Header
        title={'Memory Game'}
        rules={'Get points by clicking on an image but do not click on any more than once!'}
        currentScore={currentScore}
        bestScore={bestScore}
      />
      <GameContainer data={data} />
    </main>
  );
}

export default App;
