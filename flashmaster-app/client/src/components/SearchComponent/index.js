import React, { useState } from 'react';
import { useQuery } from '@apollo/client';

import { QUERY_SINGLE_USER, QUERY_FLASHDECK } from '../../utils/queries';

function SearchBar() {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchUser, { data: usersData }] = useQuery(QUERY_SINGLE_USER);
    const [searchTopic, { data: flashdeckData }] = useQuery(QUERY_FLASHDECK);

    const handleSearch = (event) => {
        event.preventDefault();
        searchUser({ variables: { name: searchTerm } });
        searchTopic({ variables: { name: searchTerm } });
    };
    return (
        <div className="search">
            <div className="searchInputs">
                <form onSubmit={handleSearch}>
                    <input type="text" placeholder='Search!' value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)}>
                        <button type="submit">Search</button>
                        {usersData && (
                            <ul>
                                {usersData.users.map((user) => {
                                    <li key={user._id}>{user.name}</li>
                                })}
                            </ul>
                        )}
                        {myProfileData && (
                            <ul>
                                {flashdeckData.users.map((user) => (
                                    <li key={flashdeck._id}>{flashdeck.topic}{flashdeck.author}{flashdeck.comments}</li>
                                ))}
                            </ul>
                        )}
                    </input>
                </form>
            </div>
        </div>
    )
};

export default SearchBar;


