import React, { useEffect, useState } from 'react';
import WordPair from '../WordPair/WordPair';
import { levels } from '../../data/levels';

const GameBoard = ({ level, onBackToMenu }) => {
  const [shuffledWords, setShuffledWords] = useState({ left: [], right: [] });
  const [selectedWords, setSelectedWords] = useState([]);
  const [matchedPairs, setMatchedPairs] = useState([]);
  
  const handleWordClick = (word, translation, isLeftColumn) => {
    if (selectedWords.length === 0) {
      setSelectedWords([{ word, translation, isLeftColumn }]);
    } else {
      const [firstSelection] = selectedWords;
      if ((firstSelection.isLeftColumn && word === firstSelection.translation) ||
          (!firstSelection.isLeftColumn && word === firstSelection.translation)) {
        setMatchedPairs([...matchedPairs, firstSelection.word, word]);
      }
      setSelectedWords([]);
    }
  };

  useEffect(() => {
    const words = levels[level].words;
    // console.log(words)
    // switch (level) {
    //   case 0:
    //     //[[dd],][1]]
    //     words = pila(words)

        
    // }
    const leftWords = words.map(wordPair => wordPair[0]);
    const rightWords = words.map(wordPair => wordPair[1]);

    // Función para barajar
    const shuffleArray = array => {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
    };

    shuffleArray(leftWords);
    shuffleArray(rightWords);

    setShuffledWords({ left: leftWords, right: rightWords });
  }, [level]);

  return (
    <div className="game-board">
      <button onClick={onBackToMenu}>Volver al Menú Principal</button>
      <div className="column">
        {shuffledWords.left.map((word, index) => (
          <WordPair 
            key={index} 
            word={word} 
            onClick={() => handleWordClick(word, levels[level].words.find(pair => pair[0] === word)[1], true)} 
            matched={matchedPairs.includes(word)}
          />
        ))}
      </div>
      <div className="column">
        {shuffledWords.right.map((word, index) => (
          <WordPair 
            key={index} 
            word={word} 
            onClick={() => handleWordClick(word, levels[level].words.find(pair => pair[1] === word)[0], false)} 
            matched={matchedPairs.includes(word)}
          />
        ))}
      </div>
    </div>
  );
};

export default GameBoard;