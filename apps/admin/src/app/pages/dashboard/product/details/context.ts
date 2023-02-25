import { GetProductByIdAdminQuery } from "@admin/gql/graphql";
import { createContext } from "react";

export interface IProductContext {
  product?: GetProductByIdAdminQuery["getProductByIdAdmin"];
  getProductLoading: boolean;
  productId: string;
  refetch: () => void;
}

export default createContext<IProductContext>({
  product: undefined,
  getProductLoading: true,
  productId: "",
  refetch: () => "",
});
