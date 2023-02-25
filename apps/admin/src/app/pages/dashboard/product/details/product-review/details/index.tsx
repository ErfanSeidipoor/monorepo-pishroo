import { FC } from "react";

import Details from "./components/details";
import Context from "./context";
import useData from "./useDate";

export const ProductReviewUpdatePage: FC = () => {
  const { getProductReviewLoading, productReview, productReviewId, refetch } =
    useData();

  return (
    <Context.Provider
      value={{
        getProductReviewLoading,
        productReview,
        productReviewId,
        refetch,
      }}
    >
      <Details />
    </Context.Provider>
  );
};

export default ProductReviewUpdatePage;
