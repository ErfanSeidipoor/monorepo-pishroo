import { FC } from "react";

import Details from "./components/details";
import Files from "./components/files";
import Context from "./context";
import useData from "./useDate";

export const TransporterActionUpdatePage: FC = () => {
  const {
    getTransporterActionLoading,
    transporterAction,
    transporterActionId,
    refetch,
  } = useData();

  return (
    <Context.Provider
      value={{
        getTransporterActionLoading,
        transporterAction,
        transporterActionId,
        refetch,
      }}
    >
      <Details />
      <Files />
    </Context.Provider>
  );
};

export default TransporterActionUpdatePage;
