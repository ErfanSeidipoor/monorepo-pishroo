import { gql } from "@apollo/client";

export const MUTATION_UPDATE_TRANSPORTER_ADMIN = gql`
  mutation updateTransporterAdmin(
    $updateTransporterAdminInputs: UpdateTransporterAdminInputsGQL!
  ) {
    updateTransporterAdmin(
      updateTransporterAdminInputs: $updateTransporterAdminInputs
    ) {
      id
      name
      phone
      email
      description
      address
      isActive
      cityId
      city {
        id
        name
        province {
          name
          id
        }
      }
    }
  }
`;
