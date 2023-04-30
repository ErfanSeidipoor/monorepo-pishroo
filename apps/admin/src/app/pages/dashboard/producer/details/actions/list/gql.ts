import { gql } from "@apollo/client";

export const QUERY_GET_PRODUCER_ACTIONS_ADMIN = gql`
  query getProducerActionsAdmin(
    $getProducerActionsAdminArgs: GetProducerActionsAdminArgsGQL!
    $paginationArgs: PaginationArgsGQL!
  ) {
    getProducerActionsAdmin(
      getProducerActionsAdminArgs: $getProducerActionsAdminArgs
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
        producer {
          id
          name
          phone
          email
          description
          address
        }
        userId
        user {
          id
          firstName
          username
          lastName
        }
      }
    }
  }
`;
