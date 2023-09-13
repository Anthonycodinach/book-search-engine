import { gql } from '@apollo/client';

export const GET_ONE_USER = gql`
query getSingleUser($_id: ID!) {
  user(userId: $_id) {
    _id
    name
  }
}
`;
