import { GetTransporterByIdAdminQuery } from "@app/gql/graphql";
import { createContext } from "react";

export interface ITransporterContext {
  transporter?: GetTransporterByIdAdminQuery["getTransporterByIdAdmin"];
  getTransporterLoading: boolean;
  transporterId: string;
  refetch: () => void;
}

export default createContext<ITransporterContext>({
  transporter: undefined,
  getTransporterLoading: true,
  transporterId: "",
  refetch: () => "",
});
