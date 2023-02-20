import { FC } from "react";

import Details from "./components/details";
import Context from "./context";
import useData from "./useDate";

export const TransporterUpdatePage: FC = () => {
  const { getTransporterLoading, transporter, transporterId, refetch } = useData();

  return (
    <Context.Provider
      value={{
        getTransporterLoading,
        transporter,
        transporterId,
        refetch,
      }}
    >
      <Details />
    </Context.Provider>
  );
};

export default TransporterUpdatePage;
