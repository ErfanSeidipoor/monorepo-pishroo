import { gql } from "@apollo/client";

export const QUERY_GET_CUSTOMER_ACTION_BY_ID_ADMIN = gql`
  query getCustomerActionByIdAdmin($customerActionId: String!) {
    getCustomerActionByIdAdmin(customerActionId: $customerActionId) {
      id
      text
      customerId
      customer {
        email
        jobTitle
        phone
        officePhone
      }
      userId
      user {
        id
        firstName
        username
      }
      fileUses {
        id
        file {
          id
          filename
        }
      }
    }
  }
`;
