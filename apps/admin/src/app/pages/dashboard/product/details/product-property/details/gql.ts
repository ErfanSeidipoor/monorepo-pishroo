import { gql } from "@apollo/client";

export const QUERY_GET_PRODUCT_PROPERTY_BY_ID_ADMIN = gql`
  query getProductPropertyByIdAdmin($productPropertyId: String!) {
    getProductPropertyByIdAdmin(productPropertyId: $productPropertyId) {
      id
      value
      property {
        id
        name
        unit
        isActive
      }
    }
  }
`;
