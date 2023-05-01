import React, { useState} from 'react';


function Home() {
    const [wordOfTheDay, setWordOfTheDay] = useState('');
    const [definition, setDefinition] = useState('');

    const handleClick = () => {
    fetch("https://word-of-the-day2.p.rapidapi.com/word/today", {
    "method": "GET",
    "headers": {
        'X-RapidAPI-Key': '426d28183dmsh7bb9fc73c777885p187cabjsne3940bffb164',
		'X-RapidAPI-Host': 'word-of-the-day2.p.rapidapi.com'
    },
    })
    .then((response) => response.json())
    .then((data) => {console.log(data);
    setWordOfTheDay(data[1].word);
    setDefinition(data[1].mean);
    })
    .catch((err) => console.log(err));
};

    return (
        <div className='home'>
            <button onClick={handleClick}>Generate Word of The Day</button>
            <h1>{wordOfTheDay}:</h1>
            <p>{definition}</p>
        </div>
    );
}

export default Home;