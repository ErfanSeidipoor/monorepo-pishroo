import { gql } from "@apollo/client";

export const GET_PROVINCES_ADMIN_AUTO_COMPLETE = gql`
  query getProvincesAdminAotoComplete(
    $getProvincesAdminArgs: GetProvincesAdminArgsGQL!
  ) {
    getProvincesAdmin(
      getProvincesAdminArgs: $getProvincesAdminArgs
      paginationArgs: { limit: 30, page: 1 }
    ) {
      edges {
        id
        name
      }
    }
  }
`;
