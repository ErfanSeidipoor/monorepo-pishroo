import { gql } from "@apollo/client";

export const GET_PROPERTIES_ADMIN_AUTO_COMPLETE = gql`
  query getPropertiesAdminAutoComplete(
    $getPropertiesAdminArgs: GetPropertiesAdminArgsGQL!
  ) {
    getPropertiesAdmin(
      getPropertiesAdminArgs: $getPropertiesAdminArgs
      paginationArgs: { limit: 3000, page: 1 }
    ) {
      edges {
        id
        name
        unit
        isActive
      }
    }
  }
`;
