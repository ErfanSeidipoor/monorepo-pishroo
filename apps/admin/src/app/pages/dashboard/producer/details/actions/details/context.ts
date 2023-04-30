import { GetProducerActionByIdAdminQuery } from "@admin/gql/graphql";
import { createContext } from "react";

export interface IProducerActionContext {
  producerAction?: GetProducerActionByIdAdminQuery["getProducerActionByIdAdmin"];
  getProducerActionLoading: boolean;
  producerActionId: string;
  refetch: () => void;
}

export default createContext<IProducerActionContext>({
  producerAction: undefined,
  getProducerActionLoading: true,
  producerActionId: "",
  refetch: () => "",
});
