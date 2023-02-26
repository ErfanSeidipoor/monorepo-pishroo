import { gql } from "@apollo/client";

export const GET_USERS_ADMIN_AUTO_COMPLETE = gql`
  query getUsersAdminAutoComplete($getUsersAdminArgs: GetUsersAdminArgsGQL!) {
    getUsersAdmin(
      getUsersAdminArgs: $getUsersAdminArgs
      paginationArgs: { limit: 300, page: 1 }
    ) {
      edges {
        id
        username
        firstName
        lastName
      }
    }
  }
`;
