import { gql } from "@apollo/client";

export const MUTATION_CREATE_CITY_ADMIN = gql`
  mutation createCityAdmin($createCityAdminInputs: CreateCityAdminInputsGQL!) {
    createCityAdmin(createCityAdminInputs: $createCityAdminInputs) {
      id
      name
      province {
        id
        name
      }
    }
  }
`;
