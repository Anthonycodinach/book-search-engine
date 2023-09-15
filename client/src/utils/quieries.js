import { gql } from '@apollo/client';

export const GET_ONE_USER = gql`
  {
    getSingleUser {
      _id
      username
      email
      savedBooks {
        bookId
        authors
        image
        description
        title
        link
      }
    }
  }
`;
