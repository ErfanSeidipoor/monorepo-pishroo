import { gql } from "@apollo/client";

export const MUTATION_UPDATE_PROPERTY_OF_PRODUCT_ADMIN = gql`
  mutation updatePropertyOfProductAdmin(
    $updatePropertyOfProductAdminInputs: UpdatePropertyOfProductAdminInputsGQL!
  ) {
    updatePropertyOfProductAdmin(
      updatePropertyOfProductAdminInputs: $updatePropertyOfProductAdminInputs
    ) {
      id
      value
      property {
        id
        name
        unit
        isActive
      }
    }
  }
`;
