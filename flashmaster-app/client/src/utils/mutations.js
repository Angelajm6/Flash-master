import { gql } from '@apollo/client';

export const ADD_USER = gql`
  mutation addUser($name: String!, $subject: String!, $role: String!, $email: String!, $password: String!) {
    addUser(name: $name, subject: $subject, role: $role, email: $email, password: $password) {
      name
      subject
      _id
      role
      email
      password
      
    }
  }
`;
export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      profile {
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
      comment
    }
  }
`;

export const ADD_FLASHDECK = gql`
mutation addFlashdeck($userId: ID!, $name: String!, $subject: String!, $flashdeck: [String!]) {
  addFlashdeck(userId: $userId, name: $name, subject: $subject, flashdeck: $flashdeck) {
    _id
    name
    subject
    flashdeck
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

export const UPDATE_FLASHDECK = gql`
  mutation updateFlashdeck($userId: ID!, $name: String!, $subject: String!, $flashdeck: [String!]) {
    updateFlashdeck(userId: $userId, name: $name, subject: $subject, flashdeck: $flashdeck) {
      _id
      name
      subject
      flashdeck
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

export const REMOVE_FLASHDECK = gql`
  mutation removeFlashdeck($flashdeck: [String!]) {
    removeFlashdeck(flashdeck: $flashdeck) {
      _id
      name
      subject
      flashdeck
    }
  }
`;

export const LOGIN_USER = gql`
mutation loginUser($email: String!, $password: String!) {
  loginUser(email: $email, password: $password) {
    email
    password
  }
}
`;