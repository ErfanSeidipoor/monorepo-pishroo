import { gql } from "@apollo/client";

export const MUTATION_ADD_COLORS_TO_ADMIN = gql`
  mutation addColorsToProductAdmin(
    $addColorsToProductAdminInputs: AddColorsToProductAdminInputsGQL!
  ) {
    addColorsToProductAdmin(
      addColorsToProductAdminInputs: $addColorsToProductAdminInputs
    ) {
      id
      name
      productColors {
        id
        colorId
        color {
          id
          value
          name
        }
      }
    }
  }
`;
