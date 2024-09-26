import React, { useEffect, useState } from 'react';
import levelGraph from '../../data/levelGraph';

const LevelSelector = ({ levels, onSelectLevel, completedLevels }) => {
  const [unlockedLevels, setUnlockedLevels] = useState([]);

  useEffect(() => {
    const unlocked = levels.map((level, index) => {
      if (index === 0) return true; // Siempre desbloquear el primer nivel
      // Verificar si hay alguna arista que apunte a este nivel desde un nivel completado
      for (let completed of completedLevels) {
        if (levelGraph.hasEdge(completed, index)) {
          return true;
        }
      }
      return false;
    });
    setUnlockedLevels(unlocked);
  }, [levels, completedLevels]);

  return (
    <div className="level-selector-container">
      <h2 className="level-selector-heading">Selecciona un Nivel</h2>
      <ul className="level-selector-list">
        {levels.map((level, index) => (
          <li 
            key={index} 
            onClick={() => unlockedLevels[index] && onSelectLevel(index)}
            className={`level-selector-item ${unlockedLevels[index] ? 'unlocked' : 'locked'}`}
          >
            {level.name} {unlockedLevels[index] ? '' : '🔒'}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LevelSelector;

