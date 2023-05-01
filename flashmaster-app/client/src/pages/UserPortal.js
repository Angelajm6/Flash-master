import React, { useEffect } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
//import Flash from '../components/FlashCard/index';
import { QUERY_SINGLE_USER } from '../utils/queries';
import Auth from '../utils/auth';

export default function UserPortal({ history }) {
  const { userId } = useParams();

  const { data, loading } = useQuery(userId ? QUERY_SINGLE_USER : {});

  const portal = data?.user || data?.portal || {};

  useEffect(() => {
    if (Auth.loggedIn() && Auth.getProfile().data._id === userId) {
      history.push('/user');
    }
  }, [userId, history]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!portal?.name) {
    return (
      <h4>
        You need to be logged in to see your portal page. Use the navigation
        links above to sign up or log in!
      </h4>
    );
  }

  return (
    <>
      <h2 className="card-header">
        {userId ? `${portal.name}'s` : 'Your'} collection of flash card decks:
      </h2>
    </>
  );
}
