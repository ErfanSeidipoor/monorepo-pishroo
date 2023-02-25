import { GetProjectByIdAdminQuery } from "@admin/gql/graphql";
import { createContext } from "react";

export interface IProjectContext {
  project?: GetProjectByIdAdminQuery["getProjectByIdAdmin"];
  getProjectLoading: boolean;
  projectId: string;
  refetch: () => void;
}

export default createContext<IProjectContext>({
  project: undefined,
  getProjectLoading: true,
  projectId: "",
  refetch: () => "",
});
