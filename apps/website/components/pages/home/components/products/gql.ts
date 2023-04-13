import { gql } from "@apollo/client";

export const QUERY_GET_CATEGORIES_PUBLIC = gql`
  query getCategoriesPublicHomePage(
    $getCategoriesPublicArgs: GetCategoriesPublicArgsGQL!
  ) {
    getCategoriesPublic(
      getCategoriesPublicArgs: $getCategoriesPublicArgs
      paginationArgs: { limit: 30 }
    ) {
      edges {
        id
        name
      }
    }
  }
`;
