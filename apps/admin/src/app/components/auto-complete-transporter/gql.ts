import { gql } from "@apollo/client";

export const GET_TRANSPORTERS_ADMIN_AUTO_COMPLETE = gql`
  query getTransportersAdminAutoComplete(
    $getTransportersAdminArgs: GetTransportersAdminArgsGQL!
  ) {
    getTransportersAdmin(
      getTransportersAdminArgs: $getTransportersAdminArgs
      paginationArgs: { limit: 30, page: 1 }
    ) {
      edges {
        id
        name
        city {
          name
          id
          province {
            id
            name
          }
        }
      }
    }
  }
`;
