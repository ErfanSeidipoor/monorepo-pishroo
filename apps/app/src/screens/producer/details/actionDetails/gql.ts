import { gql } from "@apollo/client";

export const QUERY_GET_PRODUCER_ACTION_BY_ID_ADMIN = gql`
  query getProducerActionByIdAdmin($producerActionId: String!) {
    getProducerActionByIdAdmin(producerActionId: $producerActionId) {
      id
      text
      producerId
      producer {
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
