import { gql } from "@apollo/client";

export const QUERY_GET_PRODUCT_BY_ID = gql`
  query getProductByIdPublicProductPage($identity: String!) {
    getProductByIdPublic(identity: $identity) {
      id
      name
      slug
      isActive
      text

      productReviews {
        id
        reviewer
        text
        fileUses {
          id
          file {
            id
            filename
          }
        }
      }

      productProperties {
        id
        value
        property {
          name
          unit
        }
      }
      productColors {
        id
        colorId
        color {
          id
          value
          name
        }
      }
      productCategories {
        id
        categoryId
        category {
          id
          name
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
