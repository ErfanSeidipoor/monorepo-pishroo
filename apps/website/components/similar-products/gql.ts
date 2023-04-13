import { gql } from "@apollo/client";

export const GET_PROJECTS_PUBLIC_SIMILAR_PRODUCTS = gql`
  query getProductsPublicSimilarProducts(
    $getProductsPublicArgs: GetProductsPublicArgsGQL!
  ) {
    getProductsPublic(
      getProductsPublicArgs: $getProductsPublicArgs
      paginationArgs: { limit: 30 }
    ) {
      edges {
        id
        name
        slug
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
