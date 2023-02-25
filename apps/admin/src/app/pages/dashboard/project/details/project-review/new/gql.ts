import { gql } from "@apollo/client";

export const MUTATION_CREATE_PROJECT_REVIEW_ADMIN = gql`
  mutation createProjectReviewAdmin(
    $createProjectReviewAdminInputs: CreateProjectReviewAdminInputsGQL!
  ) {
    createProjectReviewAdmin(
      createProjectReviewAdminInputs: $createProjectReviewAdminInputs
    ) {
      id
      createdAt
      reviewer
      text
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
