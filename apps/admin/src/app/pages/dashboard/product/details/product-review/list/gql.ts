import { gql } from "@apollo/client";

export const QUERY_GET_PRODUCT_REVIEWS_ADMIN = gql`
  query getProductReviewsAdmin(
    $getProductReviewsAdminArgs: GetProductReviewsAdminArgsGQL!
    $paginationArgs: PaginationArgsGQL!
  ) {
    getProductReviewsAdmin(
      getProductReviewsAdminArgs: $getProductReviewsAdminArgs
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
        id
        createdAt
        reviewer
        text
        text
        productId
        product {
          name
          id
        }
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

export const MUTATION_DELETE_PRODUCT_REVIEW_ADMIN = gql`
  mutation deleteProductReviewAdmin(
    $deleteProductReviewAdmin: DeleteProductReviewAdminInputsGQL!
  ) {
    deleteProductReviewAdmin(
      deleteProductReviewAdminInputs: $deleteProductReviewAdmin
    ) {
      id
      isActive
    }
  }
`;
