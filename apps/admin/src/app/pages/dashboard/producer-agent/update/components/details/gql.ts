import { gql } from "@apollo/client";

export const MUTATION_UPDATE_PRODUCER_AGENT_ADMIN = gql`
  mutation updateProducerAgentAdmin(
    $updateProducerAgentAdminInputs: UpdateProducerAgentAdminInputsGQL!
  ) {
    updateProducerAgentAdmin(
      updateProducerAgentAdminInputs: $updateProducerAgentAdminInputs
    ) {
      id
      createdAt
      firstName
      lastName
      email
      phone
      description
      isActive
      producer {
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
