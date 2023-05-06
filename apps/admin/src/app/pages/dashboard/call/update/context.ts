import { GetCallByIdAdminQuery } from "@admin/gql/graphql";
import { createContext } from "react";

export interface ICallContext {
  call?: GetCallByIdAdminQuery["getCallByIdAdmin"];
  getCallLoading: boolean;
  callId: string;
  refetch: () => void;
}

export default createContext<ICallContext>({
  call: undefined,
  getCallLoading: true,
  callId: "",
  refetch: () => "",
});
