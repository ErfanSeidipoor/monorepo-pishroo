import { gql } from "@apollo/client";

export const QUERY_GET_PRODUCTS_PUBLIC = gql`
  query getProductsPublicProductPage(
    $getProductsPublicArgs: GetProductsPublicArgsGQL!
    $paginationArgs: PaginationArgsGQL!
  ) {
    getProductsPublic(
      getProductsPublicArgs: $getProductsPublicArgs
      paginationArgs: $paginationArgs
    ) {
      pageInfo {
        totalEdges
        edgeCount
        edgesPerPage
        currentPage
        totalPages
      }
      edges {
        slug
        id
        name
        isActive
        createdAt
        updatedAt
        deletedAt
        fileUses {
          id
          status
          type
          isPublic
          file {
            filename
            size
            id
          }
        }
      }
    }
  }
`;

export const QUERY_GET_CATEGORIES_PUBLIC = gql`
  query getCategoriesPublicProductPage(
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
