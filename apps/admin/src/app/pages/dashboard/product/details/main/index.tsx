import { FC } from "react";

import Details from "./components/details";
import Images from "./components/images";
import Colors from "./components/colors";
import Categories from "./components/categories";
import useData from "./useDate";

export const ProductUpdatePage: FC = () => {
  useData();
  return (
    <>
      <Details />
      <Colors />
      <Categories />
      <Images />
    </>
  );
};

export default ProductUpdatePage;
