import { FC } from "react";

import Details from "./components/details";
import Context from "./context";
import useData from "./useDate";

export const ProducerUpdatePage: FC = () => {
  const { getProducerLoading, producer, producerId, refetch } = useData();

  return (
    <Context.Provider
      value={{
        getProducerLoading,
        producer,
        producerId,
        refetch,
      }}
    >
      <Details />
    </Context.Provider>
  );
};

export default ProducerUpdatePage;
