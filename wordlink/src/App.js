import React, { useState } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import LevelSelector from './components/LevelSelector/LevelSelector';
import GameBoard from './components/GameBoard/GameBoard';
import { levels } from './data/levels';
import './App.css';

const App = () => {
  const [currentLevel, setCurrentLevel] = useState(null);

  const handleBackToMenu = () => {
    setCurrentLevel(null);
  };

  return (
    <div className="app">
      <Header />
      {currentLevel === null ? (
        <LevelSelector levels={levels} onSelectLevel={setCurrentLevel} />
      ) : (
        <GameBoard level={currentLevel} onBackToMenu={handleBackToMenu} />
      )}
      <Footer />
    </div>
  );
};

export default App;



// import './App.css';
// import { Routes, Route } from 'react-router-dom';
// import Home from './pages/Home/Home';

// function App() {
//   return (
//     <div className="App">
//         <Routes>
//           <Route path='/' element={<Home />} />
//         </Routes>
//     </div>
//   );
// }

// export default App;
