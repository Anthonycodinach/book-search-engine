import { gql } from '@apollo/client';

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const SAVE_BOOK = gql`
mutation Mutation($bookData: BookInput!) {
  saveBook(bookData: $bookData) {
    _id
    username
    email
    savedBooks {
      bookId
      title
    }
  }
}
`;

export const DELETE_BOOK = gql`
mutation deleteBook($bookId: ID!) {
  deleteBook(bookId: $bookId) {
    username
    savedBooks {
      title
      bookId
    }
  }
}
`;
