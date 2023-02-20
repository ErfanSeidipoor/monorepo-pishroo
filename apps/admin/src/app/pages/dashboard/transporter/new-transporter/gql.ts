import { gql } from "@apollo/client";

export const MUTATION_CREATE_TRANSPORTER_ADMIN = gql`
  mutation createTransporterAdmin(
    $createTransporterAdminInputs: CreateTransporterAdminInputsGQL!
  ) {
    createTransporterAdmin(
      createTransporterAdminInputs: $createTransporterAdminInputs
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
