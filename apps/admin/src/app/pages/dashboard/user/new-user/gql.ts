import { gql } from "@apollo/client";

export const MUTATION_CREATE_USER_ADMIN = gql`
  mutation createUserAdmin($createUserAdminInputs: CreateUserAdminInputsGQL!) {
    createUserAdmin(createUserAdminInputs: $createUserAdminInputs) {
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
