import { GetCustomerActionByIdAdminQuery } from "@app/gql/graphql";
import { createContext } from "react";

export interface ICustomerActionContext {
  customerAction?: GetCustomerActionByIdAdminQuery["getCustomerActionByIdAdmin"];
  getCustomerActionLoading: boolean;
  customerActionId: string;
  refetch: () => void;
}

export default createContext<ICustomerActionContext>({
  customerAction: undefined,
  getCustomerActionLoading: true,
  customerActionId: "",
  refetch: () => "",
});
