import { GetTransporterAgentByIdAdminQuery } from "@admin/gql/graphql";
import { createContext } from "react";

export interface ITransporterAgentContext {
  transporterAgent?: GetTransporterAgentByIdAdminQuery["getTransporterAgentByIdAdmin"];
  getTransporterAgentLoading: boolean;
  transporterAgentId: string;
  refetch: () => void;
}

export default createContext<ITransporterAgentContext>({
  transporterAgent: undefined,
  getTransporterAgentLoading: true,
  transporterAgentId: "",
  refetch: () => "",
});
