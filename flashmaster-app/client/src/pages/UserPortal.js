import React from 'react';

import { Navigate, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import Flash from '../components/FlashCard/index';

import { QUERY_SINGLE_USER, QUERY_ME } from '../utils/queries';

import Auth from '../utils/auth';


export default function UserPortal() {
    const { userId } = useParams();

    const { data, loading } = useQuery(
        userId ? QUERY_SINGLE_USER : QUERY_ME,
        {
            variables: { userId: userId },
        }
    );

    const portal = data?.me || data?.portal || {};

    if (Auth.loggedIn() && Auth.getProfile().data._id === userId) {
        return <Navigate to= "/me" />;
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
        
    </>
  )
}
