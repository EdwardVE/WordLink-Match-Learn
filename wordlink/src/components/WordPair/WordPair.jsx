import React from 'react';

const WordPair = ({ word, onClick, matched, selected }) => (
  <div 
    className={`word-pair ${matched ? 'word-pair-matched' : ''} ${selected ? 'word-pair-selected' : ''}`} 
    onClick={onClick}
  >
    {word}
  </div>
);

export default WordPair;
