import React, { useState, useRef, useEffect } from 'react';
import FlashCardList from './FlashCardList';
import { QUERY_FLASHCARDS } from '../../utils/queries';
import { useQuery } from '@apollo/client';
// import './FlashCard/FlashCard.css';

// import { QUERY_SINGLE_USER } from './utils/queries';


// Pass users array to the List component as a prop
export default function Flash() {
  // const [flashcards, setFlashcards] = useState(SAMPLE_FLASHCARDS)
  // Remove (SAMPLE_FLASHCARDS) and replace with empty array
  const [flashcards, setFlashcards] = useState(null)

  const { loading, error, data: queryData } = useQuery(QUERY_FLASHCARDS);

  useEffect(() => {
    if (queryData) {
      setFlashcards(queryData.cards);
    }
  }, [queryData]);

  const questionEl = useRef()
  const answerEl = useRef()

  function handleSubmit(e) {
    e.preventDefault()
    // Add flashcard mutation
  }
  // useEffect(() => {
    
  return (
    <>

      <form className="createCard" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="question">Question</label>
            <input id="question" ref={questionEl}>
            </input>
          <label htmlFor="answer">Answer</label>
          <input id="answer" ref={answerEl}>
          </input>
        </div>
        <div className="form-group">
          <button className="btn">Create</button>
        </div>
      </form>
      <div className="container">
        {loading && <p>Loading...</p>}
        {error && <p>Error :(</p>}
        {data && data.Flash.flashCard.map(flashCard => (
          <FlashCardList key={Flash.id} flashCard={flashCard} />
          ))} 
          <FlashCardList flashcards={flashcards}/>
        
      </div>
    </>
  );
}

// const SAMPLE_FLASHCARDS = [
//   {
//     id: 1,
//     question: "What's Q1?",
//     answer: 'A1'
//   },
//   {
//     id: 2,
//     question: 'Question 2?',
//     answer: 'Answer 2'
//   },
//   {
//     id: 3,
//     question: 'Q3?',
//     answer: 'Answer 3'
//   }
// ];
