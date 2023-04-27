import { GetCustomerByIdAdminQuery } from "@app/gql/graphql";
import { createContext } from "react";

export interface ICustomerContext {
  customer?: GetCustomerByIdAdminQuery["getCustomerByIdAdmin"];
  getCustomerLoading: boolean;
  customerId: string;
  refetch: () => void;
}

export default createContext<ICustomerContext>({
  customer: undefined,
  getCustomerLoading: true,
  customerId: "",
  refetch: () => "",
});
