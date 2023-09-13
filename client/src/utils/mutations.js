import { gql } from '@apollo/client';

export const ADD_USER = gql`
  mutation addUser($name: String!, $email: String!, $password: String!) {
    addProfile(name: $name, email: $email, password: $password) {
      token
      profile {
        _id
        name
      }
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

// export const SAVE_BOOK = gql`
//   mutation saveBook($tech1: String!, $tech2: String!) {
//     saveBook(data: bookInput): User {
//       data
//       bookInput
//     }
//   }
// `;

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

// export const DELETE_BOOK = gql`
//   mutation deleteBook($_id: String!, $techNum: Int!) {
//     createVote(_id: $_id, techNum: $techNum) {
//       _id
//       tech1
//       tech2
//       tech1_votes
//       tech2_votes
//     }
//   }
// `;

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
