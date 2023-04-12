import { gql } from "@apollo/client";

export const GET_PROJECTS_PUBLIC_SEARCHBOX = gql`
  query getProjectsPublicSearchbox(
    $getProjectsPublicArgs: GetProjectsPublicArgsGQL!
  ) {
    getProjectsPublic(
      getProjectsPublicArgs: $getProjectsPublicArgs
      paginationArgs: { limit: 3000, page: 1 }
    ) {
      edges {
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
  }
`;
