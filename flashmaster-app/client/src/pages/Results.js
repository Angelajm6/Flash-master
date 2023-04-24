import React from 'react';
import Link from '@apollo/client'


function ResultList(props) {
    return (
        <ul className="list-group">
            {props.usersData.map((result) => {
                <li className="list-group-item" key={user.id}>
                    <Link className="btn btn-lg btn-primary m-2" to="/teachers/:teacherId">
                    {user.name}
              </Link>
                </li>
            })}
        </ul>
    )
};

export default ResultList;