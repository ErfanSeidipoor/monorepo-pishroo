import { gql } from "@apollo/client";

export const MUTATION_UPDATE_TRANSPORTER_ACTION_ADMIN = gql`
  mutation updateTransporterActionAdminInputs(
    $updateTransporterActionAdminInputs: UpdateTransporterActionAdminInputsGQL!
  ) {
    updateTransporterActionAdmin(
      updateTransporterActionAdminInputs: $updateTransporterActionAdminInputs
    ) {
      id
      text
      transporterId
      userId
    }
  }
`;
