import { gql } from '@apollo/client';

export const SAVE_BOOK = gql`
  mutation saveBook($tech1: String!, $tech2: String!) {
    saveBook(data: bookInput): User {
      data
      bookInput
    }
  }
`;

export const DELETE_BOOK = gql`
  mutation deleteBook($_id: String!, $techNum: Int!) {
    createVote(_id: $_id, techNum: $techNum) {
      _id
      tech1
      tech2
      tech1_votes
      tech2_votes
    }
  }
`;