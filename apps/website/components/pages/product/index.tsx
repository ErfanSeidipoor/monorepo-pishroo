import { FC } from "react";

import { Searchbox, Products } from "./components";

export const ProductPage: FC = () => {
  return (
    <>
      <Searchbox />
      <Products />
    </>
  );
};
