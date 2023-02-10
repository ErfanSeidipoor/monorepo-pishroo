import { FC } from "react";
import { Typography, Stack } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { Controller } from "react-hook-form";
import CheckTwoToneIcon from "@mui/icons-material/CheckTwoTone";

import { Button, Checkbox, TextField } from "@pishroo/admin-components";
import TEXTS from "@pishroo/texts";
import { ITableColumn, Table, Pagination } from "@pishroo/admin-components";

import FilterSidebar from "@admin/components/filter-sidebar";
import { DASHBOARD_PRODUCT_NEW_PRODUCT_ROUTE } from "@admin/constants";

import useData from "./useDate";

export const ProductListPage: FC = () => {
  const {
    rows,
    loading,
    navigate,
    pageInfo,
    handleSubmitFilter,
    onSubmitFilter,
    onClearFilter,
    control,
    errors,
    isValid,
    onPageSelect,
  } = useData();

  const columns: ITableColumn<typeof rows[0]>[] = [
    { name: "name", cell: (item) => <p>{item.name}</p>, label: TEXTS.NAME },
    { name: "slut", cell: (item) => <p>{item.slug}</p>, label: TEXTS.SLUG },
    {
      name: "isActive",
      cell: (item) => (
        <CheckTwoToneIcon color={item.isActive ? "success" : "error"} />
      ),
      label: TEXTS.ACTIVATION,
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
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="center"
          spacing={2}
        >
          <Typography variant="h4">{TEXTS.PAGE_PRODUCT__PRODUCT}</Typography>
          {renderFilterSidebar()}
        </Stack>
        <Button
          variant="outlined"
          label={TEXTS.PAGE_PRODUCT__NEW_PRODUCT}
          color="secondary"
          onClick={() => navigate(DASHBOARD_PRODUCT_NEW_PRODUCT_ROUTE)}
          startIcon={<AddIcon />}
        ></Button>
      </Stack>
    );
  };

  const renderFilterSidebar = () => {
    return (
      <FilterSidebar
        isValid={isValid || !loading}
        disabled={loading}
        onSubmit={handleSubmitFilter(onSubmitFilter)}
        onClearClick={onClearFilter}
      >
        <Stack spacing={3}>
          <Controller
            name="name"
            control={control}
            render={({ field }) => (
              <TextField
                placeholder={TEXTS.NAME}
                label={TEXTS.NAME}
                error={errors.name !== undefined}
                helperText={errors.name?.message}
                {...field}
              />
            )}
          />
          <Controller
            name="slug"
            control={control}
            render={({ field }) => (
              <TextField
                placeholder={TEXTS.SLUG}
                label={TEXTS.SLUG}
                error={errors.slug !== undefined}
                helperText={errors.slug?.message}
                {...field}
              />
            )}
          />
          <Controller
            name="isActive"
            control={control}
            render={({ field: { onBlur, onChange, ref, value } }) => (
              <Checkbox
                onBlur={onBlur}
                label={TEXTS.IS_ACTIVE}
                checked={value}
                onChange={(_, checked) => onChange(checked)}
                inputRef={ref}
              />
            )}
          />
        </Stack>
      </FilterSidebar>
    );
  };

  const renderTable = () => {
    return <Table rows={rows} columns={columns} loading={loading} />;
  };

  const renderPagination = () => {
    return (
      <Stack direction="row" alignItems="center" justifyContent="center" mt={3}>
        <Pagination
          page={pageInfo?.currentPage}
          count={pageInfo?.totalPages}
          onPageSelect={onPageSelect}
          color="primary"
          disabled={loading}
        />
      </Stack>
    );
  };

  return (
    <>
      {renderActions()}
      {renderTable()}
      {renderPagination()}
    </>
  );
};

export default ProductListPage;
