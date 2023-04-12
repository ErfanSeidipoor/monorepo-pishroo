import { gql } from "@apollo/client";

export const QUERY_GET_USERS_PUBLIC = gql`
  query getUsersPublic(
    $getUsersPublicArgs: GetUsersPublicArgsGQL!
    $paginationArgs: PaginationArgsGQL!
  ) {
    getUsersPublic(
      getUsersPublicArgs: $getUsersPublicArgs
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
        lastName
        firstName
        phone
        email
        phone

        fileUses {
          file {
            filename
            id
          }
          id
        }

        provinceUsers {
          id
          province {
            id
            name
          }
        }
      }
    }
  }
`;
