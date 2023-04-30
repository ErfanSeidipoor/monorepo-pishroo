import { FC } from "react";

import Details from "./components/details";
import Files from "./components/files";
import Context from "./context";
import useData from "./useDate";

export const CustomerActionUpdatePage: FC = () => {
  const {
    getCustomerActionLoading,
    customerAction,
    customerActionId,
    refetch,
  } = useData();

  return (
    <Context.Provider
      value={{
        getCustomerActionLoading,
        customerAction,
        customerActionId,
        refetch,
      }}
    >
      <Details />
      <Files />
    </Context.Provider>
  );
};

export default CustomerActionUpdatePage;
