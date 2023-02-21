import { gql } from "@apollo/client";

export const MUTATION_UPDATE_TRANSPORTER_AGENT_ADMIN = gql`
  mutation updateTransporterAgentAdmin(
    $updateTransporterAgentAdminInputs: UpdateTransporterAgentAdminInputsGQL!
  ) {
    updateTransporterAgentAdmin(
      updateTransporterAgentAdminInputs: $updateTransporterAgentAdminInputs
    ) {
      id
      createdAt
      firstName
      lastName
      email
      phone
      description
      isActive
      transporter {
        id
        name
        phone
        email
        cityId
        city {
          id
          name
          province {
            id
            name
          }
        }
      }
    }
  }
`;
