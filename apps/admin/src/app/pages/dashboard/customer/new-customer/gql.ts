import { gql } from "@apollo/client";

export const MUTATION_CREATE_CUSTOMER_ADMIN = gql`
  mutation createCustomerAdmin(
    $createCustomerAdminInputs: CreateCustomerAdminInputsGQL!
  ) {
    createCustomerAdmin(createCustomerAdminInputs: $createCustomerAdminInputs) {
      id
      firstName
      lastName
      email
      jobTitle
      phone
      officePhone
      isActive
    }
  }
`;
