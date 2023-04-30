import { FC } from "react";

import Details from "./components/details";
import Files from "./components/files";
import Context from "./context";
import useData from "./useDate";

export const ProducerActionUpdatePage: FC = () => {
  const {
    getProducerActionLoading,
    producerAction,
    producerActionId,
    refetch,
  } = useData();

  return (
    <Context.Provider
      value={{
        getProducerActionLoading,
        producerAction,
        producerActionId,
        refetch,
      }}
    >
      <Details />
      <Files />
    </Context.Provider>
  );
};

export default ProducerActionUpdatePage;
