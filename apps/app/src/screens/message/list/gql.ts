import { gql } from "@apollo/client";

export const QUERY_GET_MESSAGES_ADMIN = gql`
  query getMessagesAdmin(
    $getMessagesAdminArgs: GetMessagesAdminArgsGQL!
    $paginationArgs: PaginationArgsGQL!
  ) {
    getMessagesAdmin(
      getMessagesAdminArgs: $getMessagesAdminArgs
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
        count
        createdAt
        updatedAt
        deletedAt
        isActive
        isSubmited
        userId
        user {
          id
          username
          firstName
          lastName
        }
        customerMessages {
          id
          customer {
            id
            email
            jobTitle
            firstName
            lastName
            email
            phone
            officePhone
          }
        }
      }
    }
  }
`;
