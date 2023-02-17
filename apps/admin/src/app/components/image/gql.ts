import { gql } from "@apollo/client";

export const MUTATION_REMOVE_IMAGE_ADMIN = gql`
  mutation removeImageAdmin($removeImageAdmin: RemoveImageAdminInputsGQL!) {
    removeImageAdmin(removeImageAdmin: $removeImageAdmin) {
      id
      filename
    }
  }
`;
