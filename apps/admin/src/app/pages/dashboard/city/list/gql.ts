import { gql } from "@apollo/client";

export const QUERY_GET_CITIES_ADMIN = gql`
  query getCitiesAdmin(
    $getCitiesAdminArgs: GetCitiesAdminArgsGQL!
    $paginationArgs: PaginationArgsGQL!
  ) {
    getCitiesAdmin(
      getCitiesAdminArgs: $getCitiesAdminArgs
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
        name
        province {
          name
          id
        }
      }
    }
  }
`;
