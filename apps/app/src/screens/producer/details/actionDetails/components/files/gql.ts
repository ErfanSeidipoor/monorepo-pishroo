import { gql } from "@apollo/client";

export const MUTATION_ADD_FILE_TO_PRODUCER_ACTION = gql`
  mutation addFileToProducerActionAdmin(
    $addFileToProducerActionAdmin: AddFileToProducerActionAdminInputsGQL!
  ) {
    addFileToProducerActionAdmin(
      addFileToProducerActionAdmin: $addFileToProducerActionAdmin
    ) {
      id
    }
  }
`;
