import { gql } from '@apollo/client';
// import { authorizedbuyersmarketplace } from 'googleapis/build/src/apis/authorizedbuyersmarketplace';

export const QUERY_USERS =  gql`
query allUsers {
  users {
    _id
    name
    subject
    flashcards
  }
}
`;
export const QUERY_FLASHCARD =  gql`
query allUsers {
  Flashcard {
    _id
    topic
    author
    createdAt
    comments
  }
}
`;


export const QUERY_SINGLE_USER =  gql`
query singleUser($userId: ID!)  {
  user(userId: $userId) {
    _id
    name
    flashcards {
      _id
      topic
      author
      createdAt
      comments
    }
  }
}
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      name
      role
      flashcards
    }
  }
`;


