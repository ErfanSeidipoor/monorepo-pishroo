import { gql } from "@apollo/client";

export const QUERY_GET_PRODUCTS_ADMIN = gql`
  query getProductsAdmin(
    $getProductsAdminArgs: GetProductsAdminArgsGQL!
    $paginationArgs: PaginationArgsGQL!
  ) {
    getProductsAdmin(
      getProductsAdminArgs: $getProductsAdminArgs
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
        text
        productProperties {
          id
          value
          property {
            name
            unit
          }
        }
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

export const MUTATION_UPDATE_PRODUCT_ACTIVATION_ADMIN = gql`
  mutation updateProductActivationAdmin(
    $updateProductActivationAdmin: UpdateProductActivationAdminInputsGQL!
  ) {
    updateProductActivationAdmin(
      updateProductActivationAdmin: $updateProductActivationAdmin
    ) {
      id
      isActive
    }
  }
`;
