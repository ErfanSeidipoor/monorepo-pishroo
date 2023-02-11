import { gql } from "@apollo/client";

export const MUTATION_ADD_IMAGE_TO_PRODUCT = gql`
  mutation addImageToProductAdmin(
    $addImageToProductAdmin: AddImageToProductAdminInputsGQL!
  ) {
    addImageToProductAdmin(addImageToProductAdmin: $addImageToProductAdmin) {
      id
    }
  }
`;
