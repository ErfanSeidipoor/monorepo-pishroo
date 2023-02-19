import { gql } from "@apollo/client";

export const QUERY_GET_PROVINCE_BY_ID_ADMIN = gql`
  query getProvinceByIdAdmin($provinceId: String!) {
    getProvinceByIdAdmin(provinceId: $provinceId) {
      id
      name
    }
  }
`;
