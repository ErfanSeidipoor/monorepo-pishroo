import { gql } from "@apollo/client";

export const QUERY_GET_CITY_BY_ID_ADMIN = gql`
  query getCityByIdAdmin($cityId: String!) {
    getCityByIdAdmin(cityId: $cityId) {
      id
      name
      provinceId
      province {
        name
        id
      }
    }
  }
`;
