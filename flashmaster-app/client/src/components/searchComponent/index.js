import React from 'react';
import { useState } from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_SINGLE_USER } from '../../utils/queries';
import { QUERY_FLASHDECK } from '../../utils/queries';
import { Link } from 'react-router-dom';



const Searchbar = () => {
    const [search, setSearch] = useState('');
    const [result, setResult] = useState([]);
    const { loading, data } = useQuery(QUERY_SINGLE_USER, QUERY_FLASHDECK);
    const users = data?.users || [];
    const flashdecks = data?.flashdecks || [];

    const handleSearch = (e) => {
        e.preventDefault();
        const searchedUsers = users.filter((user) => {
            return user.name.toLowerCase().includes(search.toLowerCase())
        });
        const searchedFlashdecks = flashdecks.filter((flashdeck) => {
            return flashdeck.topic.toLowerCase().includes(search.toLowerCase())
        });
        const searchedResults = [...searchedUsers, ...searchedFlashdecks];
        setResult(searchedResults);
    };


    return (
        <div>
            <form onSubmit={handleSearch}>
                <input
                    type="text"
                    placeholder="Search For A Topic"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <button type="submit">Search</button>
            </form>
            {loading ? (
                <div>Loading...</div>
            ) : (
                <ul>
                    {result.length > 0 ? (
                        <ul>
                            {result.map((result) => (
                                <li key={result.id}>{result.username || result.topic}</li>
                            ))}
                        </ul>
                    ) : (
                        <div>No results found.</div>
                    )}
                </ul>
            )}
            <Link
                className="btn btn-block btn-squared btn-light text-dark"
                to={`/profiles/${profile._id}`}
            >
                View
            </Link>
        </div>
    )
};

export default Searchbar;

