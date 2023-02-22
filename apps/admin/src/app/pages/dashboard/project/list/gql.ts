import { gql } from "@apollo/client";

export const QUERY_GET_PROJECTS_ADMIN = gql`
  query getProjectsAdmin(
    $getProjectsAdminArgs: GetProjectsAdminArgsGQL!
    $paginationArgs: PaginationArgsGQL!
  ) {
    getProjectsAdmin(
      getProjectsAdminArgs: $getProjectsAdminArgs
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

export const MUTATION_UPDATE_PROJECT_ACTIVATION_ADMIN = gql`
  mutation updateProjectActivationAdmin(
    $updateProjectActivationAdmin: UpdateProjectActivationAdminInputsGQL!
  ) {
    updateProjectActivationAdmin(
      updateProjectActivationAdminInputs: $updateProjectActivationAdmin
    ) {
      id
      isActive
    }
  }
`;
