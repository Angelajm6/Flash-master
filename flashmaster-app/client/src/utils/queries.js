import { gql } from '@apollo/client';

export const QUERY_USERS = gql`
  query getUsers {
    users {
        name
        _id
        subject
        email
        role
        flashdecks
    }
  }
`;

export const QUERY_SINGLE_USER = gql`
  query getUser {
    user {
        name
        _id
        subject
        email
        role
        flashdecks
    }
  }
`;

export const QUERY_COMMENTS = gql`
  query getComments {
    comments {
        _id
        commentText
        commentAuthor
        createdAt
    }
  }
`;

export const QUERY_SINGLE_COMMENT = gql`
  query getComment {
    comment {
        _id
        commentText
        commentAuthor
        createdAt
    }
  }
`;

export const QUERY_FLASHDECKS = gql`
  query getFlashdecks($topic: String!) {
    flashdecks(topic: $topic) {
        _id
        topic
        author
        createdAt
        comments
    }
  }
`;

export const QUERY_SINGLE_FLASHDECK = gql`
  query getFlashdeck($topic: String!) {
    flashdeck(topic: $topic) {
        _id
        topic
        author
        createdAt
        comments
    }
  }
`;

// export const QUERY_POST = gql`
//   query getPost($id: Int!) {
//     post(id: $id) {
//       id
//       authorId
//       title
//       votes
//     }
//   }
// `;
