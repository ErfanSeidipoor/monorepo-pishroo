import { gql } from "@apollo/client";

export const QUERY_ME_ADMIN = gql`
  query meAdmin {
    meAdmin {
      id
      lastName
      firstName
      createdAt
      roles
      username
    }
  }
`;
