import { gql } from "@apollo/client";

export const MUTATION_ADD_PROPERTY_TO_PRODUCT_ADMIN = gql`
  mutation addPropertyToProductAdminInputs(
    $addPropertyToProductAdminInputs: AddPropertyToProductAdminInputsGQL!
  ) {
    addPropertyToProductAdmin(
      addPropertyToProductAdminInputs: $addPropertyToProductAdminInputs
    ) {
      id
      value
    }
  }
`;
