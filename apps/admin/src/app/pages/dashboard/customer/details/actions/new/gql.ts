import { gql } from "@apollo/client";

export const MUTATION_CREATE_CUSTOMER_ACTION_ADMIN = gql`
  mutation createCustomerActionAdminInputs(
    $createCustomerActionAdminInputs: CreateCustomerActionAdminInputsGQL!
  ) {
    createCustomerActionAdmin(
      createCustomerActionAdminInputs: $createCustomerActionAdminInputs
    ) {
      id
      text
      customerId
      userId
    }
  }
`;
