// src/App.jsx
import React, { useState } from 'react';
import './App.css'; // Importa el CSS global
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import LevelSelector from './components/LevelSelector/LevelSelector';
import GameBoard from './components/GameBoard/GameBoard';
import { levels } from './data/levels';
import levelGraph from './data/levelGraph';

const App = () => {
  const [currentLevel, setCurrentLevel] = useState(null);
  const [completedLevels, setCompletedLevels] = useState([]);

  const handleSelectLevel = (levelIndex) => {
    setCurrentLevel(levelIndex);
  };

  const handleBackToMenu = () => {
    setCurrentLevel(null);
  };

  const handleLevelComplete = (levelIndex) => {
    setCompletedLevels(prev => [...prev, levelIndex]);
    handleBackToMenu();
  };

  return (
    <div className="app">
      <Header />
      <main className="main">
        {currentLevel === null ? (
          <LevelSelector 
            levels={levels} 
            onSelectLevel={handleSelectLevel} 
            completedLevels={completedLevels}
          />
        ) : (
          <GameBoard 
            level={currentLevel} 
            onBackToMenu={handleBackToMenu} 
            onLevelComplete={handleLevelComplete}
          />
        )}
      </main>
      <Footer />
    </div>
  );
};

export default App;
