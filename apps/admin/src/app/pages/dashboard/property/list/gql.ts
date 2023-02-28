import { gql } from "@apollo/client";

export const QUERY_GET_PROPERTIES_ADMIN = gql`
  query getPropertiesAdmin(
    $getPropertiesAdminArgs: GetPropertiesAdminArgsGQL!
    $paginationArgs: PaginationArgsGQL!
  ) {
    getPropertiesAdmin(
      getPropertiesAdminArgs: $getPropertiesAdminArgs
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
        name
        unit
        isActive
      }
    }
  }
`;

export const MUTATION_UPDATE_PROPERTY_ACTIVATION_ADMIN = gql`
  mutation updatePropertyActivationAdmin(
    $updatePropertyActivationAdminInputs: UpdatePropertyActivationAdminInputsGQL!
  ) {
    updatePropertyActivationAdmin(
      updatePropertyActivationAdminInputs: $updatePropertyActivationAdminInputs
    ) {
      id
      name
      unit
      isActive
    }
  }
`;
