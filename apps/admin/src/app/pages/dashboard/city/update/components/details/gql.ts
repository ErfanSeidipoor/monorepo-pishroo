import { gql } from "@apollo/client";

export const MUTATION_UPDATE_CITY_ADMIN = gql`
  mutation updateCityAdmin($updateCityAdminInputs: UpdateCityAdminInputsGQL!) {
    updateCityAdmin(updateCityAdminInputs: $updateCityAdminInputs) {
      id
      name
      provinceId
      province {
        name
        id
      }
    }
  }
`;
