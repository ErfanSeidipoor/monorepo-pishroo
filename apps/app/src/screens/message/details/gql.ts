import { gql } from "@apollo/client";

export const QUERY_GET_MESSAGE_BY_ID_ADMIN = gql`
  query getMessageByIdAdmin($messageId: String!) {
    getMessageByIdAdmin(messageId: $messageId) {
      id
      text
      count
      createdAt
      updatedAt
      deletedAt
      isActive
      isSubmited
      userId
      user {
        id
        username
        firstName
        lastName
      }
      customerMessages {
        id
        customer {
          id
          email
          jobTitle
          firstName
          lastName
          email
          phone
          officePhone
          isActive
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
  }
`;
