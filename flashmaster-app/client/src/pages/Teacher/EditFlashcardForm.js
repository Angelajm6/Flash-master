import React, { useState, useEffect } from 'react';

function EditFlashcardForm(props) {
  const [front, setFront] = useState('');
  const [back, setBack] = useState('');

  useEffect(() => {
    setFront(props.flashcard.front);
    setBack(props.flashcard.back);
  }, [props.flashcard]);

  const handleFrontChange = (event) => {
    setFront(event.target.value);
  }

  const handleBackChange = (event) => {
    setBack(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onEditFlashcard(props.flashcard.id, front, back);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Front:
        <input type="text" value={front} onChange={handleFrontChange} />
      </label>
      <label>
        Back:
        <input type="text" value={back} onChange={handleBackChange} />
      </label>
      <button type="submit">Save</button>
    </form>
  );
}

export default EditFlashcardForm;
