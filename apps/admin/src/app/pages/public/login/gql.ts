import { gql } from "@apollo/client";

const MUTATION_LOGIN = gql`
  mutation AddTodo($type: String!) {
    addTodo(type: $type) {
      id
      type
    }
  }
`;
