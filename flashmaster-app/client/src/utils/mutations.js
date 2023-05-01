import { gql } from '@apollo/client';

export const ADD_USER = gql`
  mutation addUser($name: String!, $subject: String!, $role: String!, $email: String!, $password: String!) {
    addUser(name: $name, subject: $subject, role: $role, email: $email, password: $password) {
      token
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        name
      }
    }
  }
`;

export const ADD_COMMENT = gql`
  mutation addComment($userId: ID!, $name: String!, $comment: String!) {
    addComment(userId: $userId, name: $name, comment: $comment) {
      _id
      name
      commentText
    }
  }
`;

export const ADD_FLASHCARD = gql`
mutation addFlashcard($userId: ID!, $name: String!, $subject: String!, $Flash: [String!]) {
  addFlashcard(userId: $userId, name: $name, subject: $subject, Flash: $Flash) {
    _id
    name
    subject
    Flash
  }
}
`;

export const UPDATE_USER = gql`
mutation updateUser($name: String!, $subject: String!, $role: String!, $email: String!, $password: String!) {
  updateUser(name: $name, subject: $subject, role: $role, email: $email, password: $password) {
    name
    subject
    _id
    role
    email
    password
  }
}
`;

export const UPDATE_COMMENT = gql`
  mutation updateComment($userId: ID!, $name: String!, $comment: String!) {
    updateComment(userId: $userId, name: $name, comment: $comment) {
      _id
      name
      comment
    }
  }
`;

export const UPDATE_FLASHCARD = gql`
  mutation updateFlashcard($userId: ID!, $name: String!, $subject: String!, $Flash: [String!]) {
    updateFlashcard(userId: $userId, name: $name, subject: $subject, Flash: $Flash) {
      _id
      name
      subject
      Flash
    }
  }
`;

export const REMOVE_USER = gql`
mutation removeUser($name: String!) {
  removeUser(name: $name) {
    name
    subject
    _id
    role
    email
    password
  }
}
`;

export const REMOVE_COMMENT = gql`
  mutation removeComment($comment: String!) {
    removeComment(comment: $comment) {
      _id
      name
      comment
    }
  }
`;

export const REMOVE_FLASHCARD = gql`
  mutation removeFlashcard($Flash: [String!]) {
    removeFlashcard(Flash: $Flash) {
      _id
      name
      subject
      Flash
    }
  }
`;
