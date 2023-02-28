import { gql } from "@apollo/client";

export const MUTATION_CREATE_PROPERTY_ADMIN = gql`
  mutation createPropertyAdmin(
    $createPropertyAdminInputs: CreatePropertyAdminInputsGQL!
  ) {
    createPropertyAdmin(createPropertyAdminInputs: $createPropertyAdminInputs) {
      id
      name
      unit
      isActive
    }
  }
`;
