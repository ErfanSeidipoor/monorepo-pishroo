import { FC } from "react";
import { Grid, Stack, Typography } from "@mui/material";
import { Controller } from "react-hook-form";
import { Button, TextField, Checkbox } from "@pishroo/admin-components";
import TEXTS from "@pishroo/texts";

import Images from "./components/images";
import Details from "./components/details";
import Context from "./context";
import useData from "./useDate";

export const ProductUpdatePage: FC = () => {
  const { getProductLoading, product, productId, refetch } = useData();

  return (
    <Context.Provider
      value={{
        getProductLoading,
        product,
        productId,
        refetch,
      }}
    >
      <Details />
      <Images />
    </Context.Provider>
  );
};

export default ProductUpdatePage;
