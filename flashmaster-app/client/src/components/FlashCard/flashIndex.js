import React, { useState, useRef, useEffect } from 'react';
import FlashCardList from './FlashCard/FlashCardList';

export default function FlashIndex() {
  const [flashcards, setFlashcards] = useState(JSON.parse(localStorage.getItem('flashcards')) || SAMPLE_FLASHCARDS);

  const questionEl = useRef();
  const answerEl = useRef();

  useEffect(() => {
    localStorage.setItem('flashcards', JSON.stringify(flashcards));
  }, [flashcards]);

  function handleSubmit(e) {
    e.preventDefault();
    const newFlashcard = {
      question: questionEl.current.value,
      answer: answerEl.current.value
    };
    setFlashcards(prevFlashcards => [...prevFlashcards, newFlashcard]);
    questionEl.current.value = '';
    answerEl.current.value = '';
  }

  return (
    <>
      <form className="createCard" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="question">Question</label>
          <input id="question" ref={questionEl} />
          <label htmlFor="answer">Answer</label>
          <input id="answer" ref={answerEl} />
        </div>
        <div className="form-group">
          <button className="btn">Create</button>
        </div>
      </form>
      <div className="container">
        <FlashCardList flashcards={flashcards}/>
      </div>
    </>
  );
}


const SAMPLE_FLASHCARDS = [
  {
    question: "What's Q1?",
    answer: 'A1'
  },
  {
    question: 'Question 2?',
    answer: 'Answer 2'
  },
  {
    question: 'Q3?',
    answer: 'Answer 3'
  }
];