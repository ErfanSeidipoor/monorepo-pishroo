import { gql } from "@apollo/client";

export const QUERY_GET_PRODUCERS_ADMIN = gql`
  query getProducersAdmin(
    $getProducersAdminArgs: GetProducersAdminArgsGQL!
    $paginationArgs: PaginationArgsGQL!
  ) {
    getProducersAdmin(
      getProducersAdminArgs: $getProducersAdminArgs
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
