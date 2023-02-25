import { gql } from "@apollo/client";

export const GET_COLORS_ADMIN_AUTO_COMPLETE = gql`
  query getColorsAdminAutoComplete(
    $getColorsAdminArgs: GetColorsAdminArgsGQL!
  ) {
    getColorsAdmin(
      getColorsAdminArgs: $getColorsAdminArgs
      paginationArgs: { limit: 300, page: 1 }
    ) {
      edges {
        id
        name
        value
      }
    }
  }
`;
