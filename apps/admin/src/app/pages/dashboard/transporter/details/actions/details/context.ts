import { GetTransporterActionByIdAdminQuery } from "@admin/gql/graphql";
import { createContext } from "react";

export interface ITransporterActionContext {
  transporterAction?: GetTransporterActionByIdAdminQuery["getTransporterActionByIdAdmin"];
  getTransporterActionLoading: boolean;
  transporterActionId: string;
  refetch: () => void;
}

export default createContext<ITransporterActionContext>({
  transporterAction: undefined,
  getTransporterActionLoading: true,
  transporterActionId: "",
  refetch: () => "",
});
