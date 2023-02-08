import { FC } from "react";
import { Typography, Stack } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import CheckTwoToneIcon from "@mui/icons-material/CheckTwoTone";

import TEXTS from "@pishroo/texts";
import { Button, ITableColumn, Table } from "@pishroo/admin-components";

import useData from "./useDate";

export const ProductListPage: FC = () => {
  const { rows, loading } = useData();

  const columns: ITableColumn<typeof rows[0]>[] = [
    { name: "name", cell: (item) => <p>{item.name}</p>, label: "Name" },
    { name: "slut", cell: (item) => <p>{item.slug}</p>, label: "Slug" },
    {
      name: "isActive",
      cell: (item) => (
        <CheckTwoToneIcon color={item.isActive ? "success" : "error"} />
      ),
      label: "Avtivation",
    },
  ];

  const renderActions = () => {
    return (
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        mb={3}
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

  const renderTable = () => {
    return <Table rows={rows} columns={columns} loading={loading} />;
  };

  return (
    <>
      {renderActions()}
      {renderTable()}
    </>
  );
};

export default ProductListPage;
