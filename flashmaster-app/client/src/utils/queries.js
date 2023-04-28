import { gql } from '@apollo/client';
import { authorizedbuyersmarketplace } from 'googleapis/build/src/apis/authorizedbuyersmarketplace';

export const QUERY_USERS =  gql`
query allUsers {
  users {
    _id
    name
    subject
    Flash
  }
}
`;
export const QUERY_FLASHCARDS =  gql`
query allFlash {
  Flash {
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
    Flash {
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

export const QUERY_COMMENTS =  gql`
query allComments {
  Comments {
    _id
    Flash
    author
    createdAt
    comments
  }
}
`;

export const QUERY_SINGLE_COMMENT =  gql`
query singleComment {
  Comment {
    _id
    Flash
    author
    createdAt
    comments
  }
}
`;

export const QUERY_DONATIONS = gql`
  query  allDonations{
    Donations {
      _id
      teacher
      amount
    }
  }
`;

export const QUERY_SINGLE_DONATION = gql`
  query  singleDonation($name: String!){
    Donation(name: $name) {
      _id
      teacher
      amount
    }
  }
`;

export const QUERY_CHECKOUT = gql`
  query  singleCheckout($name: String!, $email: String!){
    Checkout(name: $name, email: $email) {
      _id
      name
      email
      Donation{
        _id
        teacher
        amount
      }
    }
  }
`;