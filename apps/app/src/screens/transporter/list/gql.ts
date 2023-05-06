import { gql } from "@apollo/client";

export const QUERY_GET_TRANSPORTERS_ADMIN = gql`
  query getTransportersAdmin(
    $getTransportersAdminArgs: GetTransportersAdminArgsGQL!
    $paginationArgs: PaginationArgsGQL!
  ) {
    getTransportersAdmin(
      getTransportersAdminArgs: $getTransportersAdminArgs
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
        email
        name
        description
        address
        phone
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
