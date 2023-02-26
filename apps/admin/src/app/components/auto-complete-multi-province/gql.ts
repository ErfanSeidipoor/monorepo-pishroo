import { gql } from "@apollo/client";

export const GET_PROVINCES_ADMIN_AUTO_COMPLETE_MULTI = gql`
  query getProvincesAdminAutoCompleteMulti(
    $getProvincesAdminArgs: GetProvincesAdminArgsGQL!
  ) {
    getProvincesAdmin(
      getProvincesAdminArgs: $getProvincesAdminArgs
      paginationArgs: { limit: 300, page: 1 }
    ) {
      edges {
        id
        name
      }
    }
  }
`;
