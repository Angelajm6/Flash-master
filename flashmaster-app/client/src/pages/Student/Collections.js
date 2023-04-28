import React, { useState } from 'react';


function Collection() {
    //flashcards examples
  const [flashcards, setFlashcards] = useState([
    { id: 1, question: 'What is the capital of France?', answer: 'Paris' },
    { id: 2, question: 'Who wrote "To Kill a Mockingbird"?', answer: 'Harper Lee' },
    { id: 3, question: 'What is the chemical symbol for gold?', answer: 'Au' },
    { id: 4, question: 'What is the tallest mountain in the world?', answer: 'Mount Everest' },
    { id: 5, question: 'What is the largest organ in the human body?', answer: 'Skin' },
    { id: 6, question: 'What is the smallest country in the world?', answer: 'Vatican City' },
    { id: 7, question: 'What is the highest waterfall in the world?', answer: 'Angel Falls' },
    { id: 8, question: 'Who painted the Mona Lisa?', answer: 'Leonardo da Vinci' }
  ]);

  return (
    <div>
      <h1>Flashcard Collection</h1>
      <ul>
        {flashcards.map((flashcard) => (
          <li key={flashcard.id}>{flashcard.question}</li>
        ))}
      </ul>
    </div>
  );
}

export default Collection;
