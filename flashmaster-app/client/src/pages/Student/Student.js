import React, { useState, useEffect } from 'react';

function Student() {
  const [flashcards, setFlashcards] = useState([]);
  const [favorites, setFavorites] = useState([]);

  // Load flashcards from the server when the component mounts
  useEffect(() => {
    fetch('/flashcards')
      .then(response => response.json())
      .then(data => setFlashcards(data));
  }, []);

  // Add flashcards to the student's favorites
  function addFavorite(flashcard) {
    setFavorites([...favorites, flashcard]);
  }

  // Remove flashcards from the student's favorites
  function removeFavorite(index) {
    const newFavorites = [...favorites];
    newFavorites.splice(index, 1);
    setFavorites(newFavorites);
  }

  return (
    <div>
      <h1>My Flashcards</h1>
      <FlashcardList flashcards={favorites} removeFlashcard={removeFavorite} />
      <h2>All Flashcards</h2>
      <FlashcardList flashcards={flashcards} addFavorite={addFavorite} />
    </div>
  );
}

function FlashcardList({ flashcards, addFavorite, removeFlashcard }) {
  return (
    <div>
      {flashcards.map((flashcard, index) => (
        <div key={index}>
          <h3>{flashcard.question}</h3>
          <p>{flashcard.answer}</p>
          {addFavorite && (
            <button onClick={() => addFavorite(flashcard)}>Add to Favorites</button>
          )}
          {removeFlashcard && (
            <button onClick={() => removeFlashcard(index)}>Remove from Favorites</button>
          )}
        </div>
      ))}
    </div>
  );
}

export default Student;



  // Function handles form submission
//   function handleSubmit(event) {
//     event.preventDefault();
//     addFlashcard(question, answer);
//     setQuestion('');
//     setAnswer('');
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         Question:
//         <input type="text" value={question} onChange={event => setQuestion(event.target.value)} />
//       </label>
//       <label>
//         Answer:
//         <input type="text" value={answer} onChange={event => setAnswer(event.target.value)} />
//       </label>
//       <button type="submit">Add Flashcard</button>
//     </form>
//   );
// }

// function FlashcardList({ flashcards, removeFlashcard }) {
//   return (
//     <div>
//       {flashcards.map((flashcard, index) => (
//         <div key={index}>
//           <h3>{flashcard.question}</h3>
//           <p>{flashcard.answer}</p>
//           <button onClick={() => removeFlashcard(index)}>Remove Flashcard</button>
//         </div>
//       ))}
//     </div>
//   );

