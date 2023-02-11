import { gql } from "@apollo/client";

export const MUTATION_UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      id
      path
      filename
    }
  }
`;
