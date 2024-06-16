import React from 'react';
import words from "../../assets/data/words";

const Home = () => {
  return (
    <div>
        <h1>Home</h1>
        {Object.entries(words).map(([word, translation]) => (
            <p key={word}>
                <strong>{word}</strong>: {translation}
            </p>
        ))}
    </div>
  )
}

export default Home;
