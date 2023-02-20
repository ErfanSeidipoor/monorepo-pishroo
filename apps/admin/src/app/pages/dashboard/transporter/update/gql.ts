import { gql } from "@apollo/client";

export const QUERY_GET_TRANSPORTER_BY_ID_ADMIN = gql`
  query getTransporterByIdAdmin($transporterId: String!) {
    getTransporterByIdAdmin(transporterId: $transporterId) {
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
