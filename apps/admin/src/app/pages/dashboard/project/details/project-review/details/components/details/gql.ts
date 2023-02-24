import { gql } from "@apollo/client";

export const MUTATION_UPDATE_PROJECT_REVIEW_ADMIN = gql`
  mutation updateProjectReviewAdmin(
    $updateProjectReviewAdminInputs: UpdateProjectReviewAdminInputsGQL!
  ) {
    updateProjectReviewAdmin(
      updateProjectReviewAdminInputs: $updateProjectReviewAdminInputs
    ) {
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
