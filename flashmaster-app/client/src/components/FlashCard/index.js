import React from 'react'
import FlashCardList from './FlashCardList'

export default function index() {
    const [flashcards, setFlashcards] = useState(SAMPLE_FLASHCARDS)

    const questionEl = useRef()
    const answerEl = useRef()

    useEffect(() => {

    })

function handleSubmit(e) {
    e.preventDefault()
}

  return (

    <>
    {/* Adds the flashcard creation form */}
    {/* Needs conditional to only appear if the creator of the deck, or on a blank deck */}
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
