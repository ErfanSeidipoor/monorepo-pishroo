import { GetMessageByIdAdminQuery } from "@admin/gql/graphql";
import { createContext } from "react";

export interface IMessageContext {
  message?: GetMessageByIdAdminQuery["getMessageByIdAdmin"];
  getMessageLoading: boolean;
  messageId: string;
  refetch: () => void;
}

export default createContext<IMessageContext>({
  message: undefined,
  getMessageLoading: true,
  messageId: "",
  refetch: () => "",
});
