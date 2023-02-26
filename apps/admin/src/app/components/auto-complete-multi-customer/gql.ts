import { gql } from "@apollo/client";

export const GET_PROVINCES_ADMIN_AUTO_COMPLETE_MULTI = gql`
  query getCustomersAdminAutoCompleteMulti(
    $getCustomersAdminArgs: GetCustomersAdminArgsGQL!
  ) {
    getCustomersAdmin(
      getCustomersAdminArgs: $getCustomersAdminArgs
      paginationArgs: { limit: 300, page: 1 }
    ) {
      edges {
        id
        firstName
        lastName
        jobTitle
      }
    }
  }
`;
