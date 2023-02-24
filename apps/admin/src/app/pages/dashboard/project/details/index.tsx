import { FC } from "react";
import { Outlet } from "react-router-dom";

import Context from "./context";
import useData from "./useDate";

export const DashboardProjectDetailsProvider: FC = () => {
  const { getProjectLoading, project, projectId, refetch } = useData();

  return (
    <Context.Provider
      value={{
        getProjectLoading,
        project,
        projectId,
        refetch,
      }}
    >
      <Outlet />
    </Context.Provider>
  );
};

export default DashboardProjectDetailsProvider;
