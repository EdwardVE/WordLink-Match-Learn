import React from 'react';

const WordPair = ({ word, onClick, matched }) => (
  <div 
    className={`word-pair ${matched ? 'matched' : ''}`} 
    onClick={onClick}
  >
    {word}
  </div>
);

export default WordPair;
