import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery, gql } from '@apollo/client';

import Auth from '../../utils/auth';
import SearchBar from '../searchComponent/index';

const CURRENT_USER_QUERY = gql`
query me {
  me {
    _id
    name
    role
  }
}
`;

const Header = () => {
  const {loading, error, data} = useQuery(CURRENT_USER_QUERY);

    const logout = (event) => {
        event.preventDefault();
        Auth.logout();
    };

    if(loading) return <p>Loading...</p>;
    if(error) return <p>Error: {error.message}</p>;


    const {me} = data;

    return (
        <header className="bg-info text-dark mb-4 py-3 display-flex align-center">
          <div className="container flex-column justify-space-between-lg justify-center align-center text-center">
            <Link className="text-dark" to="/">
              <h1 className="m-0" style={{ fontSize: '3rem' }}>
                Flash Master
              </h1>
            </Link>
            <div>
          {Auth.loggedIn() ? (
            <>
              <Link className="btn btn-lg btn-primary m-2" to={`/user/${me._id}`}>
                {me.role === 'admin' ? 'Admin Portal' : 'Basic Portal'}
              </Link>
              <button className="btn btn-lg btn-light m-2" onClick={logout}>
                Logout
              </button>
            </>
          ) : (
            <>
                <SearchBar
                title="Search For a Teacher or Flash Pack!"
                />
              <Link className="btn btn-lg btn-primary m-2" to="/login">
                Login
              </Link>
              <Link className="btn btn-lg btn-light m-2" to="/signup">
                Signup
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
