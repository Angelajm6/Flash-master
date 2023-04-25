import React from 'react';
import { gql, useQuery } from '@apollo/client';
import Header from '../../components/Header/index';
import Gallery from '../Teacher/Gallery';
import Donation from '../Teacher/Donation';

import { QUERY_USERS } from '../../utils/queries';
import CommentList from '../../components/commentList/CommentList';
import CommentForm from '../../components/CommentForm/index';
import Login from '../Login';


// Temporary name, intended to pull all flashDecks created by the user
import { QUERY_FLASHDECKS_BY_USER } from '../../utils/queries'; 
import { QUERY_USER } from '../../utils/queries';


// If user is admin, props passed from home page to Teacher Portal page.
const StudentPortal = ({ match }: RouteComponentProps<MatchParams>) =>{
    //const { data, loading, error } =useQuery(User, {
        //variables: {
          //  id: match.params.id
       // }
   // });

    return (
    <>
        <Header></Header>
            {/*<h2>Welcome, {user.name}</h2>*/}
            {/*<card className="Gallery"><Collections></Collections>*/}
                <ul className="list-group">
                {/*{props.results.map((result) => (*/}
                    {/*<li className="list-group-item" key={result.flashDecks}></li>*/}
               {/*} ))}*/}
                </ul>
            {/*</card>*/}
        

            
    </>
    
    
    );

    
}










export default StudentPortal;