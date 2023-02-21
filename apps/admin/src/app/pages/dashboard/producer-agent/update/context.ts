import { GetProducerAgentByIdAdminQuery } from "@admin/gql/graphql";
import { createContext } from "react";

export interface IProducerAgentContext {
  producerAgent?: GetProducerAgentByIdAdminQuery["getProducerAgentByIdAdmin"];
  getProducerAgentLoading: boolean;
  producerAgentId: string;
  refetch: () => void;
}

export default createContext<IProducerAgentContext>({
  producerAgent: undefined,
  getProducerAgentLoading: true,
  producerAgentId: "",
  refetch: () => "",
});
