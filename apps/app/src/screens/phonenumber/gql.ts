import { gql } from "@apollo/client";

export const MUTATION_INSERT_DAILY_CALLS_ADMIN = gql`
  mutation insertDailyCallsAdmin(
    $insertDailyCallsAdminInputs: InsertDailyCallsAdminInputsGQL!
  ) {
    insertDailyCalls(
      insertDailyCallsAdminInputs: $insertDailyCallsAdminInputs
    ) {
      id
      timestamp
      newPhone
      userId
      customerId
      transporterId
      producerId
    }
  }
`;
