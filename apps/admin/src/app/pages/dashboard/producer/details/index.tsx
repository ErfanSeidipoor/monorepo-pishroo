import { FC } from "react";
import { Outlet } from "react-router-dom";

import Context from "./context";
import useData from "./useDate";

export const DashboardProducerDetailsProvider: FC = () => {
  const { getProducerLoading, producer, producerId, refetch } =
    useData();

  return (
    <Context.Provider
      value={{
        getProducerLoading,
        producer,
        producerId,
        refetch,
      }}
    >
      <Outlet />
    </Context.Provider>
  );
};

export default DashboardProducerDetailsProvider;
