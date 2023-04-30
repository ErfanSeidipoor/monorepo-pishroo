import { gql } from "@apollo/client";

export const QUERY_GET_TRANSPORTER_ACTIONS_ADMIN = gql`
  query getTransporterActionsAdmin(
    $getTransporterActionsAdminArgs: GetTransporterActionsAdminArgsGQL!
    $paginationArgs: PaginationArgsGQL!
  ) {
    getTransporterActionsAdmin(
      getTransporterActionsAdminArgs: $getTransporterActionsAdminArgs
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
        transporter {
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
