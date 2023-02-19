import { gql } from "@apollo/client";

export const MUTATION_CREATE_PROVINCE_ADMIN = gql`
  mutation createProvinceAdmin(
    $createProvinceAdminInputs: CreateProvinceAdminInputsGQL!
  ) {
    createProvinceAdmin(createProvinceAdminInputs: $createProvinceAdminInputs) {
      id
      name
    }
  }
`;
