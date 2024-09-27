// src/components/GameBoard/GameBoard.jsx
import React, { useEffect, useState, useRef } from 'react';
import WordPair from '../WordPair/WordPair';
import Stack from '../../utils/Estructuras de Datos/Stack';
import BinarySearchTree from '../../utils/Estructuras de Datos/BinarySearchTree';
import HashTable from '../../utils/Estructuras de Datos/HashTable';
import Modal from '../Modal/Modal';
import { levels } from '../../data/levels';

const GameBoard = ({ level, onBackToMenu, onLevelComplete }) => {
  // Estados
  const [shuffledWords, setShuffledWords] = useState({ left: [], right: [] });
  const [selectedWords, setSelectedWords] = useState([]);
  const [matchedPairs, setMatchedPairs] = useState(new Set());
  const [isProcessing, setIsProcessing] = useState(false);
  const [moveStack] = useState(new Stack()); // Instancia de Stack
  const [bst] = useState(new BinarySearchTree());
  const [hashTable] = useState(new HashTable());
  const [showModal, setShowModal] = useState(false);
  const [progress, setProgress] = useState(0);

  // Sonidos 
  const matchSound = new Audio('/sounds/Siu.mp3');
  const errorSound = new Audio('/sounds/Error.mp3');
  const undoSound = new Audio('/sounds/Romper.mp3');
  const levelCompleteSound = useRef(new Audio('/sounds/SanAndreas.mp3'));

  // Manejar clic en una palabra
  const handleWordClick = (word, isLeftColumn) => {
    const translatedWord = bst.search(word.toLowerCase()) || hashTable.get(word.toLowerCase());

    if (isProcessing || matchedPairs.has(word)) return;

    if (selectedWords.length === 0) {
      setSelectedWords([{ word, translation: translatedWord, isLeftColumn }]);
    } else {
      setIsProcessing(true);
      const [firstSelection] = selectedWords;
      if (word === firstSelection.translation) {
        const newMatchedPairs = new Set(matchedPairs);
        newMatchedPairs.add(firstSelection.word).add(word);
        setMatchedPairs(newMatchedPairs);
        moveStack.push({ word: firstSelection.word, translation: word }); // Guardar emparejamiento en la pila
        matchSound.play();
      } else {
        errorSound.play();
      }
      setTimeout(() => {
        setSelectedWords([]);
        setIsProcessing(false);
      }, 500);
    }
  };

  // Manejar deshacer el último emparejamiento
  const handleUndo = () => {
    if (!moveStack.isEmpty()) {
      const lastMove = moveStack.pop(); // Extraer el último emparejamiento
      const updatedMatchedPairs = new Set(matchedPairs);
      updatedMatchedPairs.delete(lastMove.word);
      updatedMatchedPairs.delete(lastMove.translation);
      setMatchedPairs(updatedMatchedPairs);
      undoSound.play();
    }
  };

  // Cargar palabras y estructuras de datos al montar el componente o al cambiar de nivel
  useEffect(() => {
    let words = levels[level].words;

    // Insertar en BST y HashTable
    words.forEach(pair => {
      const wordLower = pair[0].toLowerCase();
      const translationLower = pair[1].toLowerCase();
      bst.insert(wordLower, translationLower);
      bst.insert(translationLower, wordLower);
      hashTable.set(wordLower, translationLower);
      hashTable.set(translationLower, wordLower);
    });

    const leftWords = words.map(wordPair => wordPair[0]);
    const rightWords = words.map(wordPair => wordPair[1]);

    // Función para barajar
    const shuffleArray = array => {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
    };

    shuffleArray(leftWords);
    shuffleArray(rightWords);

    setShuffledWords({ left: leftWords, right: rightWords });
    setMatchedPairs(new Set());
    setSelectedWords([]);
    setIsProcessing(false);
  }, [level, bst, hashTable]);

  // Detectar cuando el nivel está completo
  useEffect(() => {
    if (matchedPairs.size === levels[level].words.length * 2) {
      setShowModal(true);
      levelCompleteSound.current.play().catch(error => {
        console.error("Error al reproducir el sonido de completar nivel:", error);
      });
    }
  }, [matchedPairs, level]);

  // Actualizar barra de progreso
  useEffect(() => {
    setProgress((matchedPairs.size / (levels[level].words.length * 2)) * 100);
  }, [matchedPairs, level]);

  // Manejar cierre del modal
  const handleCloseModal = () => {
    setShowModal(false);
    onLevelComplete(level);
  };

  return (
    <div className="game-board">
      <div className="controls">
        <button className="button" onClick={onBackToMenu}>Volver al Menú Principal</button>
        <button className="button" onClick={handleUndo} disabled={moveStack.isEmpty()}>
          Deshacer Último Emparejamiento
        </button>
      </div>
      <div className="progress-bar">
        <div className="progress" style={{ width: `${progress}%` }}></div>
      </div>
      <div className="columns">
        <div className="column">
          {shuffledWords.left.map((word, index) => (
            <WordPair 
              key={`left-${index}`} 
              word={word} 
              onClick={() => handleWordClick(word, true)} 
              matched={matchedPairs.has(word)}
              selected={selectedWords.some(sw => sw.word === word)}
            />
          ))}
        </div>
        <div className="column">
          {shuffledWords.right.map((word, index) => (
            <WordPair 
              key={`right-${index}`} 
              word={word} 
              onClick={() => handleWordClick(word, false)} 
              matched={matchedPairs.has(word)}
              selected={selectedWords.some(sw => sw.word === word)}
            />
          ))}
        </div>
      </div>
      <Modal show={showModal} onClose={handleCloseModal} title="¡Felicidades!">
        <p>Has completado el nivel {level + 1}.</p>
      </Modal>
    </div>
  );
};

export default GameBoard;
