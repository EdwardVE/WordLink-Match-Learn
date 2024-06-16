import React from 'react';

const WordLink = ({ word, onClick, matched }) => (
  <div 
    className={`word-link ${matched ? 'matched' : ''}`} 
    onClick={onClick}
  >
    {word}
  </div>
);

export default WordLink;