import { gql } from "@apollo/client";

export const QUERY_GET_PROJECT_REVIEWS_ADMIN = gql`
  query getProjectReviewsAdmin(
    $getProjectReviewsAdminArgs: GetProjectReviewsAdminArgsGQL!
    $paginationArgs: PaginationArgsGQL!
  ) {
    getProjectReviewsAdmin(
      getProjectReviewsAdminArgs: $getProjectReviewsAdminArgs
      paginationArgs: $paginationArgs
    ) {
      pageInfo {
        totalEdges
        edgeCount
        edgesPerPage
        currentPage
        totalPages
      }
      edges {
        id
        createdAt
        reviewer
        text
        text
        projectId
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
  }
`;

export const MUTATION_DELETE_PROJECT_REVIEW_ADMIN = gql`
  mutation deleteProjectReviewAdmin(
    $deleteProjectReviewAdmin: DeleteProjectReviewAdminInputsGQL!
  ) {
    deleteProjectReviewAdmin(
      deleteProjectReviewAdminInputs: $deleteProjectReviewAdmin
    ) {
      id
      isActive
    }
  }
`;
