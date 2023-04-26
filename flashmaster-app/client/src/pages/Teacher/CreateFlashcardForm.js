import React, { useState } from 'react';

function CreateFlashcardForm(props) {
  const [front, setFront] = useState('');
  const [back, setBack] = useState('');

  const handleFrontChange = (event) => {
    setFront(event.target.value);
  }

  const handleBackChange = (event) => {
    setBack(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onCreateFlashcard(front, back);
    setFront('');
    setBack('');
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
      <button type="submit">Create</button>
    </form>
  );
}

export default CreateFlashcardForm;
