import { gql } from "@apollo/client";

export const QUERY_GET_TRANSPORTER_ACTION_BY_ID_ADMIN = gql`
  query getTransporterActionByIdAdmin($transporterActionId: String!) {
    getTransporterActionByIdAdmin(transporterActionId: $transporterActionId) {
      id
      text
      transporterId
      transporter {
        id
        name
        phone
        email
        description
        address
        isActive
      }
      userId
      user {
        id
        firstName
        username
        email
        lastName
      }
      fileUses {
        id
        file {
          id
          filename
          path
          isUsed
          size
        }
      }
    }
  }
`;
