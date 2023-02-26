import { gql } from "@apollo/client";

export const QUERY_GET_CATEGORIES_ADMIN = gql`
  query getCategoriesAdmin(
    $getCategoriesAdminArgs: GetCategoriesAdminArgsGQL!
    $paginationArgs: PaginationArgsGQL!
  ) {
    getCategoriesAdmin(
      getCategoriesAdminArgs: $getCategoriesAdminArgs
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
        name
        isActive
      }
    }
  }
`;

export const MUTATION_UPDATE_CATEGORY_ACTIVATION_ADMIN = gql`
  mutation updateCategoryActivationAdmin(
    $updateCategoryActivationAdminInputs: UpdateCategoryActivationAdminInputsGQL!
  ) {
    updateCategoryActivationAdmin(
      updateCategoryActivationAdminInputs: $updateCategoryActivationAdminInputs
    ) {
      id
      name
      isActive
    }
  }
`;
