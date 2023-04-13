import { gql } from "@apollo/client";

export const QUERY_GET_PROJECT_BY_ID = gql`
  query getProjectByIdPublicProjectPage($identity: String!) {
    getProjectByIdPublic(identity: $identity) {
      id
      createdAt
      name
      slug
      isActive
      description
      lat
      long
      cityId
      projectReviews {
        id
        text
        reviewer
        fileUses {
          id
          file {
            id
            filename
          }
        }
      }
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
