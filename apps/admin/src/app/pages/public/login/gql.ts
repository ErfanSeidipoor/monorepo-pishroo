import { gql } from "@apollo/client";

export const QUERY_LOGIN_ADMIN = gql`
  query loginAdmin($loginAdminInputs: LoginAdminInputsGQL!) {
    loginAdmin(loginAdminInputs: $loginAdminInputs) {
      id
      lastName
      firstName
    }
  }
`;
