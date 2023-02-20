import { FC } from "react";

import Details from "./components/details";
import Context from "./context";
import useData from "./useDate";

export const CustomerUpdatePage: FC = () => {
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
      <Details />
    </Context.Provider>
  );
};

export default CustomerUpdatePage;
