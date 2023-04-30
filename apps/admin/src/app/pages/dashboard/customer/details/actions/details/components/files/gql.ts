import { gql } from "@apollo/client";

export const MUTATION_ADD_FILE_TO_CUSTOMER_ACTION = gql`
  mutation addFileToCustomerActionAdmin(
    $addFileToCustomerActionAdmin: AddFileToCustomerActionAdminInputsGQL!
  ) {
    addFileToCustomerActionAdmin(
      addFileToCustomerActionAdmin: $addFileToCustomerActionAdmin
    ) {
      id
    }
  }
`;
