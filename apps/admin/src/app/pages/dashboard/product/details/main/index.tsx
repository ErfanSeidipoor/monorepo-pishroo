import { FC } from "react";

import Details from "./components/details";
import Images from "./components/images";
import Colors from "./components/colors";

export const ProductUpdatePage: FC = () => {
  return (
    <>
      <Details />
      <Colors />
      <Images />
    </>
  );
};

export default ProductUpdatePage;
