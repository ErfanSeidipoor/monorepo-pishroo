import { gql } from "@apollo/client";

export const MUTATION_UPDATE_CALL_ADMIN = gql`
  mutation updateCallAdmin($updateCallAdminInputs: UpdateCallAdminInputsGQL!) {
    updateCallAdmin(updateCallAdminInputs: $updateCallAdminInputs) {
      id
      description
      createdAt
      timestamp
      newPhone
      userId
      user {
        username
        id
        firstName
        lastName
      }
      customer {
        id
        firstName
        lastName
        jobTitle
        city {
          id
          name
          province {
            id
            name
          }
        }
      }
      transporter {
        id
        name
        phone
        email
        city {
          id
          name
          province {
            id
            name
          }
        }
      }
      producer {
        id
        name
        phone
        email
        city {
          id
          name
          province {
            id
            name
          }
        }
      }
      customerId
      transporterId
      producerId
      type
    }
  }
`;
