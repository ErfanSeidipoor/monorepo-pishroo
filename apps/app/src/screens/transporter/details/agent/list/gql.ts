import { gql } from "@apollo/client";

export const QUERY_GET_TRANSPORTER_AGENTS_ADMIN = gql`
  query getTransporterAgentsAdmin(
    $getTransporterAgentsAdminArgs: GetTransporterAgentsAdminArgsGQL!
    $paginationArgs: PaginationArgsGQL!
  ) {
    getTransporterAgentsAdmin(
      getTransporterAgentsAdminArgs: $getTransporterAgentsAdminArgs
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
        transporter {
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
