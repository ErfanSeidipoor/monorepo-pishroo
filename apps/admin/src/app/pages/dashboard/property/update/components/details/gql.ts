import { gql } from "@apollo/client";

export const MUTATION_UPDATE_PROPERTY_ADMIN = gql`
  mutation updatePropertyAdmin(
    $updatePropertyAdminInputs: UpdatePropertyAdminInputsGQL!
  ) {
    updatePropertyAdmin(updatePropertyAdminInputs: $updatePropertyAdminInputs) {
      id
      name
      unit
      isActive
    }
  }
`;
