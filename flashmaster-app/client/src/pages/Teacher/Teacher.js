<<<<<<< HEAD
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation, useQuery } from '@apollo/client';
import { LOGIN_USER } from '../../utils/mutations';
import Auth from '../../utils/auth';

import { QUERY_USERS } from '../../utils/queries';
import Header from '../../components/Header/index';
import Gallery from '../Teacher/Gallery';
import Donation from '../Teacher/Donation';


import CommentList from '../../components/commentList/CommentList';
import CommentForm from '../../components/CommentForm/index';
import Login from '../Login';


// Temporary name, intended to pull all flashDecks created by the user
import { QUERY_FLASHDECKS_BY_USER } from '../../utils/queries'; 
import { QUERY_USER } from '../../utils/queries';


// If user is admin, props passed from home page to Teacher Portal page.
const TeacherPortal = ({ match }: RouteComponentProps<MatchParams>)=>{
   //const { data, loading, error } =useQuery(User, {
       // variables: {
           //id: match.params.id
     //}
   // });

    return (
    <>
        <Header></Header>
            {/*<h2>Welcome, {user.name}</h2>*/}
            <card className="Gallery"><Gallery></Gallery>
                <ul className="list-group">
               {/*} {props.results.map((result) => (*/}
                   {/* <li className="list-group-item" key={result.flashDecks}></li>*/}
               {/*))}*/}
                </ul>
            </card>
        <Donation></Donation>
        <CommentForm>
            <CommentList></CommentList>
        </CommentForm>
=======
// import React from 'react';
// import Header from '../../components/Header/index';
// import Gallery from '';
// import Donation from '';


// import CommentList from '../../components/CommentList/CommentList';
// import CommentForm from '../../components/CommentForm/CommentForm';
// import Login from '../Login';


// // Temporary name, intended to pull all flashDecks created by the user
// import { QUERY_FLASHDECKS_BY_USER } from '../../utils/queries'; 
// import { QUERY_USER } from '../../utils/queries';


// // If user is admin, props passed from home page to Teacher Portal page.
// const TeacherPortal = ({ match }: RouteComponentProps<MatchParams>) =>{
//     const { data, loading, error } =useQuery(User, {
//         variables: {
//             id: match.params.id
//         }
//     });

//     return (
//     <>
//         <Header></Header>
//             <h2>Welcome, {user.name}</h2>
//             <card className="Gallery"><Gallery></Gallery>
//                 <ul className="list-group">
//                 {props.results.map((result) => (
//                     <li className="list-group-item" key={result.flashDecks}></li>
//                 ))}
//                 </ul>
//             </card>
//         <Donation></Donation>
//         <CommentForm>
//             <CommentList></CommentList>
//         </CommentForm>

>>>>>>> main

            
//     </>
    
    
<<<<<<< HEAD
    );
                };
=======
//     );

    
// }









>>>>>>> main

// export default TeacherPortal;
