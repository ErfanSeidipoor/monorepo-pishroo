import { gql } from "@apollo/client";

export const GET_CATEGORIES_ADMIN_AUTO_COMPLETE_MULTI = gql`
  query getCategoriesAdminAutoCompleteMulti(
    $getCategoriesAdminArgs: GetCategoriesAdminArgsGQL!
  ) {
    getCategoriesAdmin(
      getCategoriesAdminArgs: $getCategoriesAdminArgs
      paginationArgs: { limit: 500, page: 1 }
    ) {
      edges {
        id
        name
      }
    }
  }
`;
