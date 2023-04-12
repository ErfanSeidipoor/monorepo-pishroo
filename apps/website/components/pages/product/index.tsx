import { FC } from "react";

import { Products } from "./components";
import { ProductSearchbox } from "@website/components/searchbox-product";

export const ProductPage: FC = () => {
  return (
    <>
      <ProductSearchbox />
      <Products />
    </>
  );
};
