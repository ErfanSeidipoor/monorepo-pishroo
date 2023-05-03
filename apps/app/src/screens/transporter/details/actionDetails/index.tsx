import { FC } from "react";
import useData from "./useDate";
import Context from "./context";
import Details from "./components/details";
import Files from "./components/files";

export const CustomeActionDetailsScreen: FC = () => {
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

export default CustomeActionDetailsScreen;
