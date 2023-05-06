import { gql } from "@apollo/client";

export const QUERY_GET_PRODUCT_BY_ID_ADMIN = gql`
  query getProductByIdAdmin($productId: String!) {
    getProductByIdAdmin(productId: $productId) {
      id
      name
      slug
      isActive
      text
      productColors {
        id
        colorId
        color {
          id
          value
          name
        }
      }
      productReviews {
        id
        reviewer
        text
      }
      productCategories {
        id
        categoryId
        category {
          id
          name
        }
      }
      productProperties {
        id
        value
        property {
          id
          name
          unit
          isActive
        }
      }
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
