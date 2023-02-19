import { gql } from "@apollo/client";

export const QUERY_GET_PROVINCES_ADMIN = gql`
  query getProvincesAdmin(
    $getProvincesAdminArgs: GetProvincesAdminArgsGQL!
    $paginationArgs: PaginationArgsGQL!
  ) {
    getProvincesAdmin(
      getProvincesAdminArgs: $getProvincesAdminArgs
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
      }
    }
  }
`;
