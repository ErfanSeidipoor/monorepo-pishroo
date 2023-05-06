import { gql } from "@apollo/client";

export const MUTATION_ADD_FILE_TO_TRANSPORTER_ACTION = gql`
  mutation addFileToTransporterActionAdmin(
    $addFileToTransporterActionAdmin: AddFileToTransporterActionAdminInputsGQL!
  ) {
    addFileToTransporterActionAdmin(
      addFileToTransporterActionAdmin: $addFileToTransporterActionAdmin
    ) {
      id
    }
  }
`;
