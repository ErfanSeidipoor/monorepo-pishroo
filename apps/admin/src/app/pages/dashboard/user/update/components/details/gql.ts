import { gql } from "@apollo/client";

export const MUTATION_UPDATE_USER_ADMIN = gql`
  mutation updateUserAdmin($updateUserAdminInputs: UpdateUserAdminInputsGQL!) {
    updateUserAdmin(updateUserAdminInputs: $updateUserAdminInputs) {
      id
      createdAt
      username
      firstName
      lastName
      email
      phone
      roles
      isActive
    }
  }
`;
