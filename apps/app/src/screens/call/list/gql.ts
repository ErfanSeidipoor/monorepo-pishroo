import { gql } from "@apollo/client";

export const QUERY_GET_CALLS_ADMIN = gql`
  query getCallsAdmin(
    $getCallsAdminArgs: GetCallsAdminArgsGQL!
    $paginationArgs: PaginationArgsGQL!
  ) {
    getCallsAdmin(
      getCallsAdminArgs: $getCallsAdminArgs
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
        description
        createdAt
        timestamp
        newPhone
        userId
        user {
          username
          id
          firstName
          lastName
        }
        customer {
          id
          firstName
          lastName
          jobTitle
          city {
            id
            name
            province {
              id
              name
            }
          }
        }
        transporter {
          id
          name
          phone
          email
          city {
            id
            name
            province {
              id
              name
            }
          }
        }
        producer {
          id
          name
          phone
          email
          city {
            id
            name
            province {
              id
              name
            }
          }
        }
        customerId
        transporterId
        producerId
        type
      }
    }
  }
`;
