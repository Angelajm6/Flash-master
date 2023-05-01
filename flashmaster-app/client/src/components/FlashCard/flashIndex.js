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

  function handleDelete(index) {
    const newFlashcards = [...flashcards];
    newFlashcards.splice(index, 1);
    setFlashcards(newFlashcards);
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
        <FlashCardList flashcards={flashcards} handleDelete={handleDelete} />
      </div>
    </>
  );
}

const SAMPLE_FLASHCARDS = [
  {
    question: "In To Kill a Mockingbird, What was Scout's first 'crime' at school?",
    answer: "Scout's first crime was that she could already read."
  },
  {
    question: "In To Kill A Mockingbird, What did Scout and Jem find in the Radleys' tree?",
    answer: "They found gum and two Indian head pennies."
  },
  {
    question: 'What was the Boo Radley game?',
    answer: 'Jem, Dill and Scout reenacted the few facts and many peculiar stories they had heard about the Radleys.'
  },
  {
    question: "Identify Miss Maudie.",
    answer: "Miss Maudie is another neighbor, about the age of Atticus. She is open-minded and enjoys the children's company."
  },
  {
    question: "What else did Jem and Scout find in the Radleys' tree?",
    answer: "They found a ball of twine, two figures (resembling themselves) carved from soap, and a broken watch."
  },
  {
    question: "Why would there be no more surprises in the tree?",
    answer: "Mr. Nathan Radley cemented the hole closed."
  },
  {
    question: " Identify Cecil Jacobs",
    answer: "Cecil Jacobs was a boy at Scout's school who first made her aware that Atticus was defending a black man."
  },
  {
    question: "What did Mr. Heck Tate's mob want?",
    answer: "They wanted to make sure Atticus and Tom Robinson would be all right."
  },
  {
    question: "What was the purpose of Walter Cunningham's mob?",
    answer: "Cunningham's mob wanted to get to Tom Robinson to inflict their own justice upon him. If that meant they had to beat up Atticus, they were willing to do that"
  },
];
