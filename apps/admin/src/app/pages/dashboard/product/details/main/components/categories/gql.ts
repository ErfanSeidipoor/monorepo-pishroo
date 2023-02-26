import { gql } from "@apollo/client";

export const MUTATION_ADD_COLORS_TO_ADMIN = gql`
  mutation addCategoriesToProductAdmin(
    $addCategoriesToProductAdminInputs: AddCategoriesToProductAdminInputsGQL!
  ) {
    addCategoriesToProductAdmin(
      addCategoriesToProductAdminInputs: $addCategoriesToProductAdminInputs
    ) {
      id
      name
      productCategories {
        id
        categoryId
        category {
          id
          name
        }
      }
    }
  }
`;
