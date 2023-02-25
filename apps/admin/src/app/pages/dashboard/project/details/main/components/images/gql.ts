import { gql } from "@apollo/client";

export const MUTATION_ADD_IMAGE_TO_PROJECT = gql`
  mutation addImageToProjectAdmin(
    $addImageToProjectAdminInputs: AddImageToProjectAdminInputsGQL!
  ) {
    addImageToProjectAdmin(
      addImageToProjectAdminInputs: $addImageToProjectAdminInputs
    ) {
      id
    }
  }
`;
