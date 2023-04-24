import React, { useState } from 'react';
import { useQuery } from '@apollo/client';

import { QUERY_SINGLE_USER, QUERY_ME } from '../../utils/queries';

function SearchBar() {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchUser, { data: usersData }] = useQuery(QUERY_SINGLE_USER);
    const [searchMe, { data: myProfileData }] = useQuery(QUERY_ME);

    const handleSearch = (event) => {
        event.preventDefault();
        searchUser({ variables: { name: searchTerm } });
        searchMe({ variables: { name: searchMe } });
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
                                {myProfileData.users.map((user) => (
                                    <li key={user._id}>{user.name}</li>
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


