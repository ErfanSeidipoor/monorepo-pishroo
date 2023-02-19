import { gql } from "@apollo/client";

export const MUTATION_UPDATE_PROVINCE_ADMIN = gql`
  mutation updateProvinceAdmin(
    $updateProvinceAdminInputs: UpdateProvinceAdminInputsGQL!
  ) {
    updateProvinceAdmin(updateProvinceAdminInputs: $updateProvinceAdminInputs) {
      id
      name
    }
  }
`;
