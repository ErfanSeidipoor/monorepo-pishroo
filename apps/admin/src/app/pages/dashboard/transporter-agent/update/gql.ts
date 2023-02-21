import { gql } from "@apollo/client";

export const QUERY_GET_TRANSPORTER_AGENT_BY_ID_ADMIN = gql`
  query getTransporterAgentByIdAdmin($transporterAgentId: String!) {
    getTransporterAgentByIdAdmin(transporterAgentId: $transporterAgentId) {
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
