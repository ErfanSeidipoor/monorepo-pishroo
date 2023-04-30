import { FC } from "react";
import { Outlet } from "react-router-dom";

import Context from "./context";
import useData from "./useDate";

export const DashboardCustomerDetailsProvider: FC = () => {
  const { getCustomerLoading, customer, customerId, refetch } = useData();

  return (
    <Context.Provider
      value={{
        getCustomerLoading,
        customer,
        customerId,
        refetch,
      }}
    >
      <Outlet />
    </Context.Provider>
  );
};

export default DashboardCustomerDetailsProvider;
