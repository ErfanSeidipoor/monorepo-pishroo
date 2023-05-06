import { gql } from "@apollo/client";

export const QUERY_GET_PRODUCER_AGENTS_ADMIN = gql`
  query getProducerAgentsAdmin(
    $getProducerAgentsAdminArgs: GetProducerAgentsAdminArgsGQL!
    $paginationArgs: PaginationArgsGQL!
  ) {
    getProducerAgentsAdmin(
      getProducerAgentsAdminArgs: $getProducerAgentsAdminArgs
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
        firstName
        lastName
        email
        phone
        description
        isActive
        producer {
          id
          name
          phone
          email
          cityId
          city {
            id
            name
            province {
              id
              name
            }
          }
        }
      }
    }
  }
`;
