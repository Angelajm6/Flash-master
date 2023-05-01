import React from 'react';
import FlashCard from './FlashCard';

export default function FlashCardList({ flashcards, handleDelete }) {
  return (
    <div className="card-grid">
      {flashcards.map((flashcard, index) => (
        <div key={index}>
          <FlashCard flashcard={flashcard} />
          <button onClick={() => handleDelete(index)}>Delete</button>
        </div>
      ))}
    </div>
  );
}
