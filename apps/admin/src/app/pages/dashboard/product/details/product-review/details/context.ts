import { GetProductReviewByIdAdminQuery } from "@admin/gql/graphql";
import { createContext } from "react";

export interface IProductReviewContext {
  productReview?: GetProductReviewByIdAdminQuery["getProductReviewByIdAdmin"];
  getProductReviewLoading: boolean;
  productReviewId: string;
  refetch: () => void;
}

export default createContext<IProductReviewContext>({
  productReview: undefined,
  getProductReviewLoading: true,
  productReviewId: "",
  refetch: () => "",
});
