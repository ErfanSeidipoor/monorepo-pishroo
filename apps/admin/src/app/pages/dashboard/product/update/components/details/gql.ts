import { gql } from "@apollo/client";

export const MUTATION_UPDATE_PRODUCT_ADMIN = gql`
  mutation updateProductAdmin(
    $updateProductAdminInputs: UpdateProductAdminInputsGQL!
  ) {
    updateProductAdmin(updateProductAdminInputs: $updateProductAdminInputs) {
      slug
      id
      name
      createdAt
      updatedAt
      deletedAt
      isActive
      text
    }
  }
`;
