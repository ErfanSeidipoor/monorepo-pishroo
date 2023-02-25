import { gql } from "@apollo/client";

export const QUERY_GET_PRODUCT_REVIEW_BY_ID_ADMIN = gql`
  query getProductReviewByIdAdmin($productReviewId: String!) {
    getProductReviewByIdAdmin(productReviewId: $productReviewId) {
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
