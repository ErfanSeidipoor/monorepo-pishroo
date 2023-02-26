import { gql } from "@apollo/client";

export const MUTATION_CREATE_MESSAGE_ADMIN = gql`
  mutation createMessageAdmin(
    $createMessageAdminInputs: CreateMessageAdminInputsGQL!
  ) {
    createMessageAdmin(createMessageAdminInputs: $createMessageAdminInputs) {
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
