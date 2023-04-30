import { gql } from "@apollo/client";

export const QUERY_GET_CUSTOMER_ACTIONS_ADMIN = gql`
  query getCustomerActionsAdmin(
    $getCustomerActionsAdminArgs: GetCustomerActionsAdminArgsGQL!
    $paginationArgs: PaginationArgsGQL!
  ) {
    getCustomerActionsAdmin(
      getCustomerActionsAdminArgs: $getCustomerActionsAdminArgs
      paginationArgs: $paginationArgs
    ) {
      pageInfo {
        totalEdges
        edgeCount
        edgesPerPage
        currentPage
        totalPages
      }
      edges {
        id
        text
        customer {
          email
          jobTitle
          phone
          officePhone
        }
        userId
        user {
          id
          firstName
          lastName
          username
        }
      }
    }
  }
`;
