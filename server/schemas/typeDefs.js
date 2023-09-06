const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Book {
    _id: ID!
    authors: String
    description: String!
    image: String
    link: String
    title: String!
  }

  type User {
    _id: ID!
    username: String!
    email: String!
    password: String!
    savedBooks: [Book]
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    user(_id: ID!): User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    saveBook(data: bookInput): User
    deleteBook(id: ID!): User
  }
`;

module.exports = typeDefs;