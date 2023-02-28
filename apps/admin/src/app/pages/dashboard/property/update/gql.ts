import { gql } from "@apollo/client";

export const QUERY_GET_PROPERTY_BY_ID_ADMIN = gql`
  query getPropertyByIdAdmin($propertyId: String!) {
    getPropertyByIdAdmin(propertyId: $propertyId) {
      id
      name
      unit
      isActive
    }
  }
`;
