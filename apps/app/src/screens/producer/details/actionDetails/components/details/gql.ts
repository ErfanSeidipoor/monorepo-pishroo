import { gql } from "@apollo/client";

export const MUTATION_UPDATE_PRODUCER_ACTION_ADMIN = gql`
  mutation updateProducerActionAdminInputs(
    $updateProducerActionAdminInputs: UpdateProducerActionAdminInputsGQL!
  ) {
    updateProducerActionAdmin(
      updateProducerActionAdminInputs: $updateProducerActionAdminInputs
    ) {
      id
      text
      producerId
      userId
    }
  }
`;
