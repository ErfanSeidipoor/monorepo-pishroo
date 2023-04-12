import { gql } from "@apollo/client";

export const QUERY_GET_USER_BY_ID_ADMIN = gql`
  query getUserByIdAdmin($userId: String!) {
    getUserByIdAdmin(userId: $userId) {
      id
      createdAt
      updatedAt
      username
      firstName
      lastName
      email
      phone
      roles
      isActive

      fileUses {
        file {
          filename
          id
        }
        id
      }

      provinceUsers {
        id
        provinceId
        province {
          id
          name
        }
      }
    }
  }
`;
