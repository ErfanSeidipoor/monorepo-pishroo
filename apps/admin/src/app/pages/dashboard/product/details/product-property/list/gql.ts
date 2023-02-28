import { gql } from "@apollo/client";

export const QUERY_GET_PRODUCT_PROPERTIES_ADMIN = gql`
  query getProductPropertiesAdmin(
    $getProductPropertiesAdminArgs: GetProductPropertiesAdminArgsGQL!
    $paginationArgs: PaginationArgsGQL!
  ) {
    getProductPropertiesAdmin(
      getProductPropertiesAdminArgs: $getProductPropertiesAdminArgs
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
        value
        property {
          id
          name
          unit
          isActive
        }
      }
    }
  }
`;

export const MUTATION_REMOVE_PROPERTY_FROM_PRODUCT_ADMIN = gql`
  mutation removePropertyFromProductAdminInputs(
    $removePropertyFromProductAdminInputs: RemovePropertyFromProductAdminInputsGQL!
  ) {
    removePropertyFromProductAdmin(
      removePropertyFromProductAdminInputs: $removePropertyFromProductAdminInputs
    ) {
      id
      isActive
    }
  }
`;
