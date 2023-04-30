import { gql } from "@apollo/client";

export const MUTATION_UPDATE_PRODUCER_ADMIN = gql`
  mutation updateProducerAdmin(
    $updateProducerAdminInputs: UpdateProducerAdminInputsGQL!
  ) {
    updateProducerAdmin(updateProducerAdminInputs: $updateProducerAdminInputs) {
      id
      name
      phone
      email
      description
      address
      isActive
      cityId
      city {
        id
        name
        province {
          name
          id
        }
      }
    }
  }
`;
