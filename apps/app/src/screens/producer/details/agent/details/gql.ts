import { gql } from "@apollo/client";

export const QUERY_GET_PRODUCER_AGENT_BY_ID_ADMIN = gql`
  query getProducerAgentByIdAdmin($producerAgentId: String!) {
    getProducerAgentByIdAdmin(producerAgentId: $producerAgentId) {
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
