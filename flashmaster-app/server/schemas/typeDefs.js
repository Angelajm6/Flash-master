const { gql } = require('apollo-server-express');
const { scalar } = require('graphql');
scalar Date;

const typeDefs = gql`
scalar Date
type MyType {
   created: Date
}

  type User {
    name: String
    subject: String
    _id: ID
    email: String
    password: String
    role: String
    flashcards: [Flash]!
  }

  type Comment {
    Flash_id: ID
    _id: ID
    commentText: String
    commentAuthor: String
    createdAt: Date
  }

  type Flash {
    _id: ID
    topic: String
    author: String
    createdAt: Date
    comments: [String]!
  }

  type Donation {
    _id: ID
    teacher: String
    amount: Int
  }

type Checkout {
  _id: ID
  donation_amount: Int
}  

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(name: String!): User
    flashcards(author: String!): Flash
    flash(topic: String!): Flash
    comments(name: String): [Comment]
    comment(commentId: ID!): Comment
    donation(userId: ID, teacher: String!, amount: Int): Donation
    checkout(userId: ID, donation_amount: Int): Checkout
  }

  type Mutation {
    addUser(name: String!, email: String!, password: String!): Auth
    updateUser(name: String, subject: String, _id: ID, email: String, password: String, role: String, Flash: [String]!): User
    login(email: String!, password: String!): Auth
    addComment(commentId: ID!, commentText: String!, commentAuthor: String!): Comment
    addFlashcard(topic: String!, author: String!): Flash
    addDonation(userId: ID, teacher: String!, amount: Int): Donation 
  }
`;


module.exports = typeDefs;