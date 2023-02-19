import { EditTwoTone as EditTwoToneIcon } from "@mui/icons-material";
import AddIcon from "@mui/icons-material/Add";
import { Stack, Typography } from "@mui/material";
import { FC } from "react";
import { Controller } from "react-hook-form";

import {
  Button,
  ITableColumn,
  Pagination,
  Table,
  TextField,
} from "@pishroo/admin-components";
import TEXTS from "@pishroo/texts";

import { FilterSidebar, TableCellAction } from "@admin/components";
import { DASHBOARD_PROVINCE_NEW_PROVINCE_ROUTE } from "@admin/constants";

import useData from "./useDate";

export const UserListPage: FC = () => {
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
    onEdit,
  } = useData();

  const columns: ITableColumn<typeof rows[0]>[] = [
    {
      name: "name",
      cell: (item) => <p>{item.name}</p>,
      label: TEXTS.NAME,
    },
    {
      name: "actions",
      cell: (item) => (
        <TableCellAction
          actions={[
            {
              label: TEXTS.UPDATE,
              icon: <EditTwoToneIcon />,
              onClick: () => onEdit(item.id),
            },
          ]}
        />
      ),
      label: TEXTS.ACTIONS,
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
          <Typography variant="h4">{TEXTS.PAGE_PROVINCE__PROVINCE}</Typography>
          {renderFilterSidebar()}
        </Stack>
        <Button
          variant="outlined"
          label={TEXTS.PAGE_PROVINCE__NEW_PROVINCE}
          color="secondary"
          onClick={() => navigate(DASHBOARD_PROVINCE_NEW_PROVINCE_ROUTE)}
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

export default UserListPage;
