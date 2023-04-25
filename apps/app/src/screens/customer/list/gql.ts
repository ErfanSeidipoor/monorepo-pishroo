import { gql } from "@apollo/client";

export const QUERY_GET_CUSTOMERS_ADMIN = gql`
  query getCustomersAdmin(
    $getCustomersAdminArgs: GetCustomersAdminArgsGQL!
    $paginationArgs: PaginationArgsGQL!
  ) {
    getCustomersAdmin(
      getCustomersAdminArgs: $getCustomersAdminArgs
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
        firstName
        lastName
        email
        jobTitle
        phone
        officePhone
        isActive
        cityId
        city {
          id
          name
          province {
            name
            id
          }
        }
      }
    }
  }
`;
