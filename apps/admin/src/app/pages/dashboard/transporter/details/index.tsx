import { FC } from "react";
import { Outlet } from "react-router-dom";

import Context from "./context";
import useData from "./useDate";

export const DashboardTransporterDetailsProvider: FC = () => {
  const { getTransporterLoading, transporter, transporterId, refetch } =
    useData();

  return (
    <Context.Provider
      value={{
        getTransporterLoading,
        transporter,
        transporterId,
        refetch,
      }}
    >
      <Outlet />
    </Context.Provider>
  );
};

export default DashboardTransporterDetailsProvider;
