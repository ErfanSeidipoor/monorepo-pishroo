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

export const QUERY_GET_FILE_BY_ID_ADMIN = gql`
  query getFileByIdAdmin($fileId: String!) {
    getFileByIdAdmin(fileId: $fileId) {
      id
      filename
    }
  }
`;
