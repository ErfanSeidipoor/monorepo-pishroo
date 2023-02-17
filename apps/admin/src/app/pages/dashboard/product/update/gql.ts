import { gql } from "@apollo/client";

export const QUERY_GET_PRODUCT_BY_ID_ADMIN = gql`
  query getProductByIdAdmin($productId: String!) {
    getProductByIdAdmin(productId: $productId) {
      id
      name
      slug
      isActive
      text
      fileUses {
        file {
          id
          filename
          path
        }
      }
    }
  }
`;
