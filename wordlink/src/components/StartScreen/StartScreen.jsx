// src/components/StartScreen/StartScreen.jsx
import React from 'react';

const StartScreen = ({ onStart }) => {
  return (
    <div className="start-screen">
      <img src="/gif/start.gif" alt="Inicio del Juego" className="start-gif" />
      <button className="start-button" onClick={onStart}>
        Start
      </button>
    </div>
  );
};

export default StartScreen;