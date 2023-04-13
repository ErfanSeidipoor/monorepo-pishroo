import { gql } from "@apollo/client";

export const GET_PROJECTS_PUBLIC_SIMILAR_PROJECTS = gql`
  query getProjectsPublicSimilarProjects(
    $getProjectsPublicArgs: GetProjectsPublicArgsGQL!
  ) {
    getProjectsPublic(
      getProjectsPublicArgs: $getProjectsPublicArgs
      paginationArgs: { limit: 30 }
    ) {
      edges {
        id
        name
        slug
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
