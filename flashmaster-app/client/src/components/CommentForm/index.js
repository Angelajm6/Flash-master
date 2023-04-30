import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation, useQuery } from '@apollo/client';
import { QUERY_SINGLE_USER } from '../../utils/queries';

import { ADD_COMMENT } from '../../utils/mutations';

import Auth from '../../utils/auth';

const CommentForm = ({ userId }) => {
  const [comment, setComment] = useState('');
 
  const { data: userData } = useQuery(QUERY_SINGLE_USER, {
    variables: { userId },
  });


  const [addComment, { error }] = useMutation(ADD_COMMENT);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if(!comment) {
      return false;
    }
    try {
      const data = await addComment({
        variables: { userId, comment },
      });

      setComment('');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h4>Add Your Comment Below!</h4>

      {Auth.loggedIn() ? (
        <form
          className="flex-row justify-center justify-space-between-md align-center"
          onSubmit={handleFormSubmit}
        >
          <div className="col-12 col-lg-9">
            <input
              placeholder="Endorse some skills..."
              value={comment}
              className="form-input w-100"
              onChange={(event) => setComment(event.target.value)}
            />
          </div>

          <div className="col-12 col-lg-3">
            <button className="btn btn-info btn-block py-3" type="submit">
              Submit Comment
            </button>
          </div>
          {error && (
            <div className="col-12 my-3 bg-danger text-white p-3">
              {error.message}
            </div>
          )}
        </form>
      ) : (
        <p>
          You need to be logged in to add a comment. Please{' '}
          <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
        </p>
      )}
    </div>
  );
};

export default CommentForm;
