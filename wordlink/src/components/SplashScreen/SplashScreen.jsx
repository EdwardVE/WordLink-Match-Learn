// src/components/SplashScreen/SplashScreen.jsx
import React from 'react';

const SplashScreen = ({ isVisible }) => {
  return (
    <div className={`splash-screen ${!isVisible ? 'hide' : ''}`}></div>
  );
};

export default SplashScreen;
