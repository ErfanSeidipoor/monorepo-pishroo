import { FC } from "react";
import { Typography, Stack } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

import TEXTS from "@pishroo/texts";
import { Button } from "@pishroo/admin-components";

import useData from "./useDate";

export const ProductListPage: FC = () => {
  useData();

  const renderActions = () => {
    return (
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        mb={5}
      >
        <Typography variant="h4" gutterBottom>
          {TEXTS.PAGE_PRODUCT__PRODUCT}
        </Typography>
        <Button
          variant="contained"
          label={TEXTS.PAGE_PRODUCT__NEW_PRODUCT}
          color="secondary"
          onClick={() => {}}
          startIcon={<AddIcon />}
        ></Button>
      </Stack>
    );
  };
  return <>{renderActions()}</>;
};

export default ProductListPage;
