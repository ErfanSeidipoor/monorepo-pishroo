import { gql } from "@apollo/client";

export const QUERY_LOGOUT_ADMIN = gql`
  query logoutAdmin {
    logoutAdmin {
      id
    }
  }
`;
