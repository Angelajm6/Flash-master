import React, { useState, useRef, useEffect } from 'react';
import FlashCardList from './FlashCardList';
import { QUERY_ALL_FLASH } from '../../utils/queries';
import { UPDATE_FLASHCARD } from '../../utils/mutations';
import { useQuery, useMutation } from '@apollo/client';
// import './FlashCard/FlashCard.css';

// import { QUERY_SINGLE_USER } from './utils/queries';


// Pass users array to the List component as a prop
export default function Flash() {
  // const [flashcards, setFlashcards] = useState(SAMPLE_FLASHCARDS)
  // Remove (SAMPLE_FLASHCARDS) and replace with empty array
  const [flashcards, setFlashcards] = useState(null);
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');

  const { loading, error, data: queryData } = useQuery(QUERY_ALL_FLASH);

  useEffect(() => {
    if (queryData) {
      setFlashcards(queryData.cards);
    }
  }, [queryData]);

  const [addCard, { data }] = useMutation(UPDATE_FLASHCARD);


  const handleSubmit = (e) => {
    e.preventDefault();
    addCard({variables: { question: question, answer: answer}});
    setQuestion('');
    setAnswer('');
    setFlashcards({question: setQuestion, answer: setAnswer});
    
  };
 
  const questionEl = useRef()
  const answerEl = useRef()

 
    
  return (
    <>

      <form className="createCard" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="question">Question</label>
            <input type="text" 
            value={question}
            id="question" ref={questionEl}
            onChange={(e) => setQuestion(e.target.value)} >
            </input>
          <label htmlFor="answer">Answer</label>
          <input type="text"
          value={answer}
          id="answer" ref={answerEl}>
            onChange={(e) => setAnswer(e.target.value)} 
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
