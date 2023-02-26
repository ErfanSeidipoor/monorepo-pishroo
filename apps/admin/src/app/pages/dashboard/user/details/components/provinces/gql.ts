import { gql } from "@apollo/client";

export const MUTATION_UPDATE_USER_PROVINCES_ADMIN = gql`
  mutation updateUserProvincesAdmin(
    $updateUserProvincesAdminInputs: UpdateUserProvincesAdminInputsGQL!
  ) {
    updateUserProvincesAdmin(
      updateUserProvincesAdminInputs: $updateUserProvincesAdminInputs
    ) {
      id
      provinceUsers {
        id
        provinceId
        province {
          id
          name
        }
      }
    }
  }
`;
