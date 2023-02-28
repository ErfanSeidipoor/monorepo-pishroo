import { GetProductPropertyByIdAdminQuery } from "@admin/gql/graphql";
import { createContext } from "react";

export interface IProductPropertyContext {
  productProperty?: GetProductPropertyByIdAdminQuery["getProductPropertyByIdAdmin"];
  getProductPropertyLoading: boolean;
  productPropertyId: string;
  refetch: () => void;
}

export default createContext<IProductPropertyContext>({
  productProperty: undefined,
  getProductPropertyLoading: true,
  productPropertyId: "",
  refetch: () => "",
});
