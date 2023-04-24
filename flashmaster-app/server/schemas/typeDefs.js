const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    name: String
    subject: String
    _id: ID
    email: String
    password: String
    admin: String
    flashDecks: [String]!
  }

  type Comment {
    _id: ID
    commentText: String
    commentAuthor: String
    createdAt: String
  }

  type Flashdeck {
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


  Work in Progress>>

  type Query {
    users: [User]
    user(name: String!): User
    comments(name: String): [Comment]
    comment(commentId: ID!): Comment
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addComment(
      commentId: ID!  
      commentText: String!
      commentAuthor: String!)
    addFlashDeck(String!)  
  }
`;

module.exports = typeDefs;
