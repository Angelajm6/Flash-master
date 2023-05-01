import { gql } from '@apollo/client';


//import { authorizedbuyersmarketplace } from 'googleapis/build/src/apis/authorizedbuyersmarketplace';


export const QUERY_USERS =  gql`
query allUsers {
  users {
    _id
    name
    email
    subject
    role
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
export const QUERY_ALL_FLASH =  gql`
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

export const QUERY_SINGLE_FLASH = gql`
query singleFlash($topic: String!) {
  Flash(topic: $topic) {
    _id
    topic
    author
    createdAt
    comments
  }
}
`;


export const QUERY_SINGLE_USER =  gql`
query singleUser($name: String!)  {
  user(name: $name) {
    _id
    name
    subject
    role
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
query singleComment($author: String!) {
  Comment(author: $author) {
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