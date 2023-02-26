import { gql } from "@apollo/client";

export const MUTATION_UPDATE_MESSAGE_ADMIN = gql`
  mutation updateMessageAdmin(
    $updateMessageAdminInputs: UpdateMessageAdminInputsGQL!
  ) {
    updateMessageAdmin(updateMessageAdminInputs: $updateMessageAdminInputs) {
      id
      text
      count
      createdAt
      updatedAt
      deletedAt
      isActive
      isSubmited
      userId
      user {
        id
        username
        firstName
        lastName
      }
      customerMessages {
        id
        customer {
          id
          email
          jobTitle
          firstName
          lastName
          email
          phone
          officePhone
          isActive
          city {
            id
            name
            province {
              id
              name
            }
          }
        }
      }
    }
  }
`;
