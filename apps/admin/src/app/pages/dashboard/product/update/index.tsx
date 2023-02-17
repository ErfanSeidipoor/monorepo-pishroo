import { FC } from "react";

import Details from "./components/details";
import Images from "./components/images";
import Context from "./context";
import useData from "./useDate";

export const ProductUpdatePage: FC = () => {
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
      <Details />
      <Images />
    </Context.Provider>
  );
};

export default ProductUpdatePage;
