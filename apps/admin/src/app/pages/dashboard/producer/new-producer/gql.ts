import { gql } from "@apollo/client";

export const MUTATION_CREATE_PRODUCER_ADMIN = gql`
  mutation createProducerAdmin(
    $createProducerAdminInputs: CreateProducerAdminInputsGQL!
  ) {
    createProducerAdmin(
      createProducerAdminInputs: $createProducerAdminInputs
    ) {
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
