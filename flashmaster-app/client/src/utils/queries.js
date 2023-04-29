import { gql } from '@apollo/client';
// import { authorizedbuyersmarketplace } from 'googleapis/build/src/apis/authorizedbuyersmarketplace';

export const QUERY_USERS =  gql`
query allUsers {
  users {
    _id
    name
    subject
    flashDecks
  }
}
`;
export const QUERY_FLASHDECK =  gql`
query allUsers {
  Flashdeck {
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
    flashDecks {
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
      flashDecks
    }
  }
`;


