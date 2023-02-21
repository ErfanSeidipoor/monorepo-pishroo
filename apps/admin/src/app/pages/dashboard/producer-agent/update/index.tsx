import { FC } from "react";

import Details from "./components/details";
import Context from "./context";
import useData from "./useDate";

export const ProducerAgentUpdatePage: FC = () => {
  const { getProducerAgentLoading, producerAgent, producerAgentId, refetch } = useData();

  return (
    <Context.Provider
      value={{
        getProducerAgentLoading,
        producerAgent,
        producerAgentId,
        refetch,
      }}
    >
      <Details />
    </Context.Provider>
  );
};

export default ProducerAgentUpdatePage;
