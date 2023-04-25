import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
<<<<<<< HEAD
import Auth from '../utils/auth';

import React from 'react';
import Header from '../../components/Header/index';
import Gallery from '';
import Donation from '';


import CommentList from '../../components/CommentList/CommentList';
import CommentForm from '../../components/CommentForm/CommentForm';
import Login from '../Login';


// Temporary name, intended to pull all flashDecks created by the user
import { QUERY_FLASHDECKS_BY_USER } from '../../utils/queries'; 
import { QUERY_USER } from '../../utils/queries';


// If user is admin, props passed from home page to Teacher Portal page.
const TeacherPortal = ({ match }: RouteComponentProps<MatchParams>) =>{
    const { data, loading, error } =useQuery(User, {
        variables: {
            id: match.params.id
        }
    });

    return (
    <>
        <Header></Header>
            <h2>Welcome, {user.name}</h2>
            <card className="Gallery"><Gallery></Gallery>
                <ul className="list-group">
                {props.results.map((result) => (
                    <li className="list-group-item" key={result.flashDecks}></li>
                ))}
                </ul>
            </card>
        <Donation></Donation>
        <CommentForm>
            <CommentList></CommentList>
        </CommentForm>

            
    </>
    
    
    );

    
}










export default TeacherPortal;
=======
import Auth from '../utils/auth';
>>>>>>> 1a4ce2f3 (minor changes in READme file)
