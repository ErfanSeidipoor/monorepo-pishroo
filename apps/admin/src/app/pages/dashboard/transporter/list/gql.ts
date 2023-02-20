import { gql } from "@apollo/client";

export const QUERY_GET_TRANSPORTERS_ADMIN = gql`
  query getTransportersAdmin(
    $getTransportersAdminArgs: GetTransportersAdminArgsGQL!
    $paginationArgs: PaginationArgsGQL!
  ) {
    getTransportersAdmin(
      getTransportersAdminArgs: $getTransportersAdminArgs
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
        email
        name
        description
        address
        phone
        isActive
        cityId
        city {
          id
          name
          province {
            name
            id
          }
        }
      }
    }
  }
`;

export const MUTATION_UPDATE_TRANSPORTER_ACTIVATION_ADMIN = gql`
  mutation updateTransporterActivationAdmin(
    $updateTransporterActivationAdmin: UpdateTransporterActivationAdminInputsGQL!
  ) {
    updateTransporterActivationAdmin(
      updateTransporterActivationAdminInputs: $updateTransporterActivationAdmin
    ) {
      id
      isActive
    }
  }
`;
