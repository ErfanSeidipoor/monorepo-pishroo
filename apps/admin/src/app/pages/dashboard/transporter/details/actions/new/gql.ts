import { gql } from "@apollo/client";

export const MUTATION_CREATE_TRANSPORTER_ACTION_ADMIN = gql`
  mutation createTransporterActionAdminInputs(
    $createTransporterActionAdminInputs: CreateTransporterActionAdminInputsGQL!
  ) {
    createTransporterActionAdmin(
      createTransporterActionAdminInputs: $createTransporterActionAdminInputs
    ) {
      id
      text
      transporterId
      userId
    }
  }
`;
