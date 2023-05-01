import React, { useState } from 'react';
import { useLazyQuery } from '@apollo/client';
import { Link } from 'react-router-dom';
import { QUERY_SINGLE_USER } from '../../utils/queries';
import auth from '../../utils/auth';
const SearchBar = () => {
    const [searchName, setSearchName] = useState('');
    const [searchUser, { loading, data, error }] = useLazyQuery(QUERY_SINGLE_USER, {
      context: {
        headers: {
          Authorization: `Bearer ${auth.getToken()}`,
        },
      },
    });
  const handleSearch = (e) => {
    e.preventDefault();
    if (searchName.trim()) {
      searchUser({ variables: { name: searchName } });
    }
  };
  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search for a user by name..."
          value={searchName}
          onChange={(e) => setSearchName(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      {loading && <p>Loading...</p>}
      {error && <p>{error.message}</p>}
      {data && data.user ? (
        <div key={data.user._id}>
          <p>Name: {data.user.name}</p>
          <p>Subject: {data.user.subject}</p>
          <p>Role: {data.user.role}</p>
          <Link to={`/users/${data.user._id}`}>Go to profile</Link>
        </div>
      ) : (
        <p>No user found</p>
      )}
    </div>
  );
};
export default SearchBar;





