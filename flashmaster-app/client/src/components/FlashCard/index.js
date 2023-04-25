import React from 'react'
import FlashCardList from './FlashCardList'

export default function index() {




function handleSubmit(e) {
    e.preventDefault()
}

  return (

    <>
    {/* Adds the flashcard creation form */}
        <form className="header" onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlForm="question" ref={questionEl}>Question</label>
                <label htmlForm="answer" ref={answerEl}>Answer</label>
            </div>
        </form>
        <div className="container">
            <FlashCardList flashcards={flashcards} />
        </div>
    </>
  )
}
