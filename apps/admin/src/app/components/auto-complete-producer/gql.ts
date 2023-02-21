import { gql } from "@apollo/client";

export const GET_PRODUCERS_ADMIN_AUTO_COMPLETE = gql`
  query getProducersAdminAutoComplete(
    $getProducersAdminArgs: GetProducersAdminArgsGQL!
  ) {
    getProducersAdmin(
      getProducersAdminArgs: $getProducersAdminArgs
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
