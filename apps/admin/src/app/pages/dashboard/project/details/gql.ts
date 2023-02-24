import { gql } from "@apollo/client";

export const QUERY_GET_PROJECT_BY_ID_ADMIN = gql`
  query getProjectByIdAdmin($projectId: String!) {
    getProjectByIdAdmin(projectId: $projectId) {
      id
      createdAt
      name
      slug
      isActive
      description
      lat
      long
      cityId
      city {
        id
        name
        province {
          id
          name
        }
      }
      fileUses {
        file {
          filename
          id
        }
        id
      }
    }
  }
`;
