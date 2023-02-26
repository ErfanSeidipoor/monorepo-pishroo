import { gql } from "@apollo/client";

export const QUERY_GET_CATEGORY_BY_ID_ADMIN = gql`
  query getCategoryByIdAdmin($categoryId: String!) {
    getCategoryByIdAdmin(categoryId: $categoryId) {
      id
      name
      isActive
    }
  }
`;
