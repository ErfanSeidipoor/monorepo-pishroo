import { gql } from "@apollo/client";

export const MUTATION_UPDATE_PRODUCT_REVIEW_ADMIN = gql`
  mutation updateProductReviewAdmin(
    $updateProductReviewAdminInputs: UpdateProductReviewAdminInputsGQL!
  ) {
    updateProductReviewAdmin(
      updateProductReviewAdminInputs: $updateProductReviewAdminInputs
    ) {
      id
      createdAt
      reviewer
      text
      productId
      isActive
      product {
        name
        id
      }
      fileUses {
        id
        file {
          id
          filename
        }
      }
    }
  }
`;
