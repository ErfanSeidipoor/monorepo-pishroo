import { gql } from "@apollo/client";

export const QUERY_GET_USERS_ADMIN = gql`
  query getUsersAdmin(
    $getUsersAdminArgs: GetUsersAdminArgsGQL!
    $paginationArgs: PaginationArgsGQL!
  ) {
    getUsersAdmin(
      getUsersAdminArgs: $getUsersAdminArgs
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
        updatedAt
        deletedAt
        username
        firstName
        lastName
        email
        phone
        roles
        isActive
      }
    }
  }
`;

export const MUTATION_UPDATE_USER_ACTIVATION_ADMIN = gql`
  mutation updateUserActivationAdmin(
    $updateUserActivationAdmin: UpdateUserActivationAdminInputsGQL!
  ) {
    updateUserActivationAdmin(
      updateUserActivationAdmin: $updateUserActivationAdmin
    ) {
      id
      isActive
    }
  }
`;
