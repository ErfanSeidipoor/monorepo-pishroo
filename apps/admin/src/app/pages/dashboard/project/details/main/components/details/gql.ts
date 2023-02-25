import { gql } from "@apollo/client";

export const MUTATION_UPDATE_PROJECT_ADMIN = gql`
  mutation updateProjectAdmin(
    $updateProjectAdminInputs: UpdateProjectAdminInputsGQL!
  ) {
    updateProjectAdmin(updateProjectAdminInputs: $updateProjectAdminInputs) {
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
