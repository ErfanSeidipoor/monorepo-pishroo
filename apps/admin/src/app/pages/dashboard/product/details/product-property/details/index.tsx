import { FC } from "react";

import Details from "./components/details";
import Context from "./context";
import useData from "./useDate";

export const ProductPropertyUpdatePage: FC = () => {
  const { getProductPropertyLoading, productProperty, productPropertyId, refetch } =
    useData();

  return (
    <Context.Provider
      value={{
        getProductPropertyLoading,
        productProperty,
        productPropertyId,
        refetch,
      }}
    >
      <Details />
    </Context.Provider>
  );
};

export default ProductPropertyUpdatePage;
