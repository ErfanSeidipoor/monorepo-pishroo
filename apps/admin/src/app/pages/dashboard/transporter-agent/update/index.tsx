import { FC } from "react";

import Details from "./components/details";
import Context from "./context";
import useData from "./useDate";

export const TransporterAgentUpdatePage: FC = () => {
  const { getTransporterAgentLoading, transporterAgent, transporterAgentId, refetch } = useData();

  return (
    <Context.Provider
      value={{
        getTransporterAgentLoading,
        transporterAgent,
        transporterAgentId,
        refetch,
      }}
    >
      <Details />
    </Context.Provider>
  );
};

export default TransporterAgentUpdatePage;
