import { gql } from "@apollo/client";

export const QUERY_GET_PRODUCER_BY_ID_ADMIN = gql`
  query getProducerByIdAdmin($producerId: String!) {
    getProducerByIdAdmin(producerId: $producerId) {
      id
      name
      phone
      email
      description
      address
      isActive
      cityId
      city {
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
