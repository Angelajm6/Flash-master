import React, { useState } from 'react';
import { useLazyQuery } from '@apollo/client';
import { QUERY_SINGLE_USER } from '../../utils/queries';
import { Link } from 'react-router-dom';

const Searchbar = () => {
    const [search, setSearch] = useState('');
    const [searchedResults, setSearchedResults] = useState([]);
    const [searchSingleUser, { loading }] = useLazyQuery(QUERY_SINGLE_USER);

    const handleSearch = (e) => {
        e.preventDefault();
        searchSingleUser({
            variables: { search },
            onCompleted: (data) => {
                setSearchedResults(data.users || []);
            }
        });
    };

    return (
        <div>
            <form onSubmit={handleSearch}>
                <input
                    type="text"
                    placeholder="Search For A User"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <button type="submit">Search</button>
            </form>
            {loading ? (
                <div>Loading...</div>
            ) : (
                <ul>
                    {searchedResults.length > 0 ? (
                        searchedResults.map((result) => (
                            <li key={result._id}>
                                <Link to={`/users/${result._id}`}>
                                    {result.username}
                                </Link>
                            </li>
                        ))
                    ) : search && (
                        <div>No results found.</div>
                    )}
                </ul>
            )}
            {!search && (
                <div>Please enter a Term</div>
            )}
        </div>
    );
};

export default Searchbar;
