import React, { useState, useEffect, useRef } from 'react';
import './FlashCard.css';

export default function FlashCard({ flashcard, onDelete }) {
    function handleDeleteClick() {
        onDelete(flashcard);
    }
    // Sets default status to !flip to show question first.
    const [flip, setFlip] = useState(false)
    // Sets initial height of flashcard
    const [height, setHeight] = useState('initial')

    const frontEl = useRef()
    const backEl = useRef()

    function setMaxHeight() {
        const frontHeight = frontEl.current.getBoundingClientRect().height
        const backHeight = backEl.current.getBoundingClientRect().height
        setHeight(Math.max(frontHeight, backHeight, 300))

    }
    // Changes max height based on any changes to questions or answers on the flashcards
    useEffect(setMaxHeight, [flashcard.question, flashcard.answer])
    useEffect(() => {
        window.addEventListener('resize', setMaxHeight)
        return () => window.removeEventListener('resize', setMaxHeight)
    }, [])

  return (
    <div 
        className={ `card ${flip ? 'flip' : ''}`}
        style={{ height: height }}
        onClick={() => setFlip(!flip)}
    >
        <div className="front" ref={frontEl}>
            {flashcard.question}
        </div>
        <div className="back" ref={backEl}>{flashcard.answer}</div>
        <button className="delete-btn" onClick={handleDeleteClick}>Delete</button>

      
    </div>
  )
}
