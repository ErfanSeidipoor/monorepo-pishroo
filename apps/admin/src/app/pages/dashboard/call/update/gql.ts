import { gql } from "@apollo/client";

export const QUERY_GET_CALL_BY_ID_ADMIN = gql`
  query getCallByIdAdmin($callId: String!) {
    getCallByIdAdmin(callId: $callId) {
      id
      description
      createdAt
      timestamp
      newPhone
      userId
      user {
        username
        id
        firstName
        lastName
      }
      customer {
        id
        firstName
        lastName
        jobTitle
        city {
          id
          name
          province {
            id
            name
          }
        }
      }
      transporter {
        id
        name
        phone
        email
        city {
          id
          name
          province {
            id
            name
          }
        }
      }
      producer {
        id
        name
        phone
        email
        city {
          id
          name
          province {
            id
            name
          }
        }
      }
      customerId
      transporterId
      producerId
      type
    }
  }
`;
