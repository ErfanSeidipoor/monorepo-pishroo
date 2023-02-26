import { gql } from "@apollo/client";

export const MUTATION_CREATE_CATEGORY_ADMIN = gql`
  mutation createCategoryAdmin(
    $createCategoryAdminInputs: CreateCategoryAdminInputsGQL!
  ) {
    createCategoryAdmin(createCategoryAdminInputs: $createCategoryAdminInputs) {
      id
      name
      isActive
    }
  }
`;
