// src/App.jsx
import React, { useState, useEffect } from 'react';
import './App.css'; // Importa el CSS global
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import LevelSelector from './components/LevelSelector/LevelSelector';
import GameBoard from './components/GameBoard/GameBoard';
import StartScreen from './components/StartScreen/StartScreen';
import SplashScreen from './components/SplashScreen/SplashScreen'; // Importa el nuevo componente
import { levels } from './data/levels';

const App = () => {
  const [currentLevel, setCurrentLevel] = useState(null);
  const [completedLevels, setCompletedLevels] = useState([]);
  const [isStarted, setIsStarted] = useState(false); // Nueva variable de estado para iniciar el juego
  const [showSplash, setShowSplash] = useState(true); // Nueva variable de estado para mostrar SplashScreen

  useEffect(() => {
    // Tiempo que la pantalla de inicio estará visible (por ejemplo, 3 segundos)
    const splashTimeout = setTimeout(() => {
      setShowSplash(false);
    }, 1750); // 3000 milisegundos = 3 segundos

    return () => clearTimeout(splashTimeout); // Limpia el timeout si el componente se desmonta
  }, []);

  const handleStart = () => {
    setIsStarted(true);
  };

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

  // Función para determinar la clase de fondo
  const getBackgroundClass = () => {
    if (showSplash) {
      return 'background-splash';
    } else if (!isStarted) {
      return 'background-start-screen';
    } else if (currentLevel === null) {
      return 'background-level-selector';
    } else {
      return `background-level-${currentLevel + 1}`; // Asumiendo que los niveles empiezan en 0
    }
  };

  return (
    <div className={`app ${getBackgroundClass()}`}>
      <Header />
      <main className="main">
        {showSplash ? (
          <SplashScreen />
        ) : !isStarted ? (
          <StartScreen onStart={handleStart} />
        ) : currentLevel === null ? (
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
