import { gql } from "@apollo/client";

export const MUTATION_CREATE_PRODUCT_REVIEW_ADMIN = gql`
  mutation createProductReviewAdmin(
    $createProductReviewAdminInputs: CreateProductReviewAdminInputsGQL!
  ) {
    createProductReviewAdmin(
      createProductReviewAdminInputs: $createProductReviewAdminInputs
    ) {
      id
      createdAt
      reviewer
      text
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
