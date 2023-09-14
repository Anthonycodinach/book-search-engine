import { gql } from '@apollo/client';

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
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
mutation Mutation($saveBookId2: ID!, $bookId: ID!) {
  saveBook(_id: $saveBookId2, bookId: $bookId) {
    _id
    username
    email
    password
    savedBooks {
      _id
      title
    }
  }
}
`;

export const DELETE_BOOK = gql`
mutation DeleteBook($deleteBookId2: ID!) {
  deleteBook(_id: $deleteBookId2) {
    username
    savedBooks {
      title
      _id
    }
    password
    email
    _id
  }
}
`;
