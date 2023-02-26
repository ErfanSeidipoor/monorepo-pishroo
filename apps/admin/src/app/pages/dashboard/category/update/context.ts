import { GetCategoryByIdAdminQuery } from "@admin/gql/graphql";
import { createContext } from "react";

export interface ICategoryContext {
  category?: GetCategoryByIdAdminQuery["getCategoryByIdAdmin"];
  getCategoryLoading: boolean;
  categoryId: string;
  refetch: () => void;
}

export default createContext<ICategoryContext>({
  category: undefined,
  getCategoryLoading: true,
  categoryId: "",
  refetch: () => "",
});
