const { gql } = require('apollo-server-express');

const typeDefs = gql`
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
    createdAt: String
  }

  type Flash {
    _id: ID
    topic: String
    author: String
    createdAt: String
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
    me(name: String!): User
    flashcards(topic: String!, userId: ID): Flash
    flash(userId: ID): Flash
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
    addFlashcard(flashName: String!, flashAuthor: String!, createdAt: String): Flash
    addDonation(userId: ID, teacher: String!, amount: Int): Donation 
  }
`;


module.exports = typeDefs;