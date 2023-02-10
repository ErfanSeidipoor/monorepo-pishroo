import { gql } from "@apollo/client";

export const MUTATION_CREATE_PRODUCT_ADMIN = gql`
  mutation createProductAdmin(
    $createProductAdminInputs: CreateProductAdminInputsGQL!
  ) {
    createProductAdmin(createProductAdminInputs: $createProductAdminInputs) {
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
