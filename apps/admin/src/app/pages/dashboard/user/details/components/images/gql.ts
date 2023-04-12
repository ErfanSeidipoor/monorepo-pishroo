import { gql } from "@apollo/client";

export const MUTATION_ADD_IMAGE_TO_USER = gql`
  mutation addImageToUserAdmin(
    $addImageToUserAdminInputs: AddImageToUserAdminInputsGQL!
  ) {
    addImageToUserAdmin(addImageToUserAdminInputs: $addImageToUserAdminInputs) {
      id
    }
  }
`;
