import { gql } from "@apollo/client";

export const QUERY_GET_PROJECT_REVIEW_BY_ID_ADMIN = gql`
  query getProjectReviewByIdAdmin($projectReviewId: String!) {
    getProjectReviewByIdAdmin(projectReviewId: $projectReviewId) {
      id
      createdAt
      reviewer
      text
      projectId
      isActive
      project {
        name
        id
      }
      fileUses {
        id
        file {
          id
          filename
        }
      }
    }
  }
`;
