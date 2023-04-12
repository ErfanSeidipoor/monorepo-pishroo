import { gql } from "@apollo/client";

export const GET_PRODUCTS_PUBLIC_SEARCHBOX = gql`
  query getProductsPublicSearchbox(
    $getProductsPublicArgs: GetProductsPublicArgsGQL!
  ) {
    getProductsPublic(
      getProductsPublicArgs: $getProductsPublicArgs
      paginationArgs: { limit: 3000, page: 1 }
    ) {
      edges {
        id
        name
        slug
        text
        fileUses {
          id
          file {
            id
            filename
          }
        }
      }
    }
  }
`;
