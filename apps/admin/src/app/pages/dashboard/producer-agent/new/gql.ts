import { gql } from "@apollo/client";

export const MUTATION_CREATE_PRODUCER_AGENT_ADMIN = gql`
  mutation createProducerAgentAdmin(
    $createProducerAgentAdminInputs: CreateProducerAgentAdminInputsGQL!
  ) {
    createProducerAgentAdmin(
      createProducerAgentAdminInputs: $createProducerAgentAdminInputs
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
