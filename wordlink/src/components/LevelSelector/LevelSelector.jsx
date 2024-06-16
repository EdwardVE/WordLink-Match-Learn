
import React from 'react';

const LevelSelector = ({ levels, onSelectLevel }) => (
  <div className="level-selector">
    <h2>Selecciona un Nivel</h2>
    <ul>
      {levels.map((level, index) => (
        <li key={index} onClick={() => onSelectLevel(index)}>
          {level.name}
        </li>
      ))}
    </ul>
  </div>
);

export default LevelSelector;
