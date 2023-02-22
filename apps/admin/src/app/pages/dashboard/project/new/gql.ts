import { gql } from "@apollo/client";

export const MUTATION_CREATE_PROJECT_ADMIN = gql`
  mutation createProjectAdmin(
    $createProjectAdminInputs: CreateProjectAdminInputsGQL!
  ) {
    createProjectAdmin(createProjectAdminInputs: $createProjectAdminInputs) {
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
