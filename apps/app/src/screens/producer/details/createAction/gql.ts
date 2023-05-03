import { gql } from "@apollo/client";

export const MUTATION_CREATE_PRODUCER_ACTION_ADMIN = gql`
  mutation createProducerActionAdminInputs(
    $createProducerActionAdminInputs: CreateProducerActionAdminInputsGQL!
  ) {
    createProducerActionAdmin(
      createProducerActionAdminInputs: $createProducerActionAdminInputs
    ) {
      id
      text
      producerId
      userId
    }
  }
`;
