const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    name: String
    subject: String
    _id: ID
    email: String
    password: String
    role: String
    flashDecks: [Flash]!
  }

  type Comment {
    Flash_id: ID
    _id: ID
    commentText: String
    commentAuthor: String
    createdAt: String
  }

  type Flash {
    _id: ID
    topic: String
    author: String
    createdAt: String
    comments: [String]!
  }

  type Auth {
    token: ID!
    user: User
  }



  type Query {
    users: [User]
    user(name: String!): User
    comments(name: String): [Comment]
    comment(commentId: ID!): Comment
  }

  type Mutation {
    addUser(name: String!, email: String!, password: String!): Auth
    updateUser(name: String, subject: String, _id: ID, email: String, password: String, role: String, Flash: [String]!): User
    login(email: String!, password: String!): Auth
    addComment(commentId: ID!, commentText: String!, commentAuthor: String!): Comment
    addFlashDeck(flashName: String!, flashAuthor: String!, createdAt: String): Flash  
  }
`;

module.exports = typeDefs;
