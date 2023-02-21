import { gql } from "@apollo/client";

export const MUTATION_CREATE_TRANSPORTER_AGENT_ADMIN = gql`
  mutation createTransporterAgentAdmin(
    $createTransporterAgentAdminInputs: CreateTransporterAgentAdminInputsGQL!
  ) {
    createTransporterAgentAdmin(
      createTransporterAgentAdminInputs: $createTransporterAgentAdminInputs
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
