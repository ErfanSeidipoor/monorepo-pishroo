import { FC } from "react";

import Details from "./components/details";
import Context from "./context";
import useData from "./useDate";

export const CategoryUpdatePage: FC = () => {
  const { getCategoryLoading, category, categoryId, refetch } = useData();

  return (
    <Context.Provider
      value={{
        getCategoryLoading,
        category,
        categoryId,
        refetch,
      }}
    >
      <Details />
    </Context.Provider>
  );
};

export default CategoryUpdatePage;
