import React from 'react';

import { Navigate, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import Flash from '../components/FlashCard/index';

import { QUERY_SINGLE_USER } from '../utils/queries';

import Auth from '../utils/auth';


export default function UserPortal() {
    const { userId } = useParams();

    // If there is no `userId` in the URL as a parameter, execute the `QUERY_ME` query instead for the logged in user's information
    const { data, loading } = useQuery(
        userId ? QUERY_SINGLE_USER:
        {
            variables: { userId: userId },
        }
    );

    // Check if data is returning from the `QUERY_SINGLE_USER` query
    const portal = data?.user || data?.portal || {};
  

      // Use React Router's `<Navigate />` component to redirect to personal portal page if username is yours
    if (Auth.loggedIn() && Auth.getProfile().data._id === userId) {
        return <Navigate to= "/user" />;
    }

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
            {userId ? `${portal.name}'s` : 'Your' } collection of flash card decks:
        </h2>
        
        {portal.flashDecks?.length > 0 && (
            <Flash
            flashDecks={portal.flashDecks}
            ifLoggedInUser={!userId && true}
            />
        )}
    </>
  )
}
