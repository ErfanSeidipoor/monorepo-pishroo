import { gql } from "@apollo/client";

export const QUERY_GET_CUSTOMER_BY_ID_ADMIN = gql`
  query getCustomerByIdAdmin($customerId: String!) {
    getCustomerByIdAdmin(customerId: $customerId) {
      id
      firstName
      lastName
      email
      jobTitle
      phone
      officePhone
      isActive
      cityId
      city {
        name
        id
        province {
          id
          name
        }
      }
    }
  }
`;
