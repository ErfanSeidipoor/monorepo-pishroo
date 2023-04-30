import { gql } from "@apollo/client";

export const MUTATION_UPDATE_CUSTOMER_ACTION_ADMIN = gql`
  mutation updateCustomerActionAdminInputs(
    $updateCustomerActionAdminInputs: UpdateCustomerActionAdminInputsGQL!
  ) {
    updateCustomerActionAdmin(
      updateCustomerActionAdminInputs: $updateCustomerActionAdminInputs
    ) {
      id
      text
      customerId
      userId
    }
  }
`;
