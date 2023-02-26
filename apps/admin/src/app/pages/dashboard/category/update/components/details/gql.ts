import { gql } from "@apollo/client";

export const MUTATION_UPDATE_CATEGORY_ADMIN = gql`
  mutation updateCategoryAdmin(
    $updateCategoryAdminInputs: UpdateCategoryAdminInputsGQL!
  ) {
    updateCategoryAdmin(updateCategoryAdminInputs: $updateCategoryAdminInputs) {
      id
      name
      isActive
    }
  }
`;
