import { gql } from "@apollo/client";

export const GET_CITIES_ADMIN_AUTO_COMPLETE = gql`
  query getCitiesAdminAutoComplete(
    $getCitiesAdminArgs: GetCitiesAdminArgsGQL!
  ) {
    getCitiesAdmin(
      getCitiesAdminArgs: $getCitiesAdminArgs
      paginationArgs: { limit: 30, page: 1 }
    ) {
      edges {
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
