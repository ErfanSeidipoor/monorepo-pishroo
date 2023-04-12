import { gql } from "@apollo/client";

export const QUERY_GET_PROJECTS_PUBLIC = gql`
  query getProjectsPublicProductPage(
    $getProjectsPublicArgs: GetProjectsPublicArgsGQL!
    $paginationArgs: PaginationArgsGQL!
  ) {
    getProjectsPublic(
      getProjectsPublicArgs: $getProjectsPublicArgs
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
        createdAt
        name
        slug
        isActive
        lat
        long
        cityId
        city {
          id
          name
          province {
            id
            name
          }
        }
        fileUses {
          file {
            filename
            id
          }
          id
        }
      }
    }
  }
`;
