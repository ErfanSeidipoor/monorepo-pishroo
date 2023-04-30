import { gql } from "@apollo/client";

export const MUTATION_UPDATE_CUSTOMER_ADMIN = gql`
  mutation updateCustomerAdmin(
    $updateCustomerAdminInputs: UpdateCustomerAdminInputsGQL!
  ) {
    updateCustomerAdmin(updateCustomerAdminInputs: $updateCustomerAdminInputs) {
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
