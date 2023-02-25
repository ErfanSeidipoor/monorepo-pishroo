import { FC } from "react";
import { Outlet } from "react-router-dom";

import Context from "./context";
import useData from "./useDate";

export const DashboardProductDetailsProvider: FC = () => {
  const { getProductLoading, product, productId, refetch } = useData();

  return (
    <Context.Provider
      value={{
        getProductLoading,
        product,
        productId,
        refetch,
      }}
    >
      <Outlet />
    </Context.Provider>
  );
};

export default DashboardProductDetailsProvider;
