import React, { useState } from 'react';
import WordLink from '../WordLink/WordLink.jsx';
import { levels } from '../../data/levels.js';

const GameBoard = ({ level }) => {
  const [selectedWords, setSelectedWords] = useState([]);
  const [matchedPairs, setMatchedPairs] = useState([]);

  const handleWordClick = (word, translation) => {
    if (selectedWords.length === 0) {
      setSelectedWords([word, translation]);
    } else {
      if (selectedWords[1] === word) {
        setMatchedPairs([...matchedPairs, word]);
      }
      setSelectedWords([]);
    }
  };

  const words = levels[level].words;

  return (
    <div className="game-board">
      <div className="column">
        {words.map((wordLink, index) => (
          <WordLink 
            key={index} 
            word={wordLink[0]} 
            onClick={() => handleWordClick(wordLink[0], wordLink[1])} 
            matched={matchedPairs.includes(wordLink[0])}
          />
        ))}
      </div>
      <div className="column">
        {words.map((wordLink, index) => (
          <WordLink 
            key={index} 
            word={wordLink[1]} 
            onClick={() => handleWordClick(wordLink[1], wordLink[0])} 
            matched={matchedPairs.includes(wordLink[0])}
          />
        ))}
      </div>
    </div>
  );
};

export default GameBoard;
