import { EditTwoTone as EditTwoToneIcon } from "@mui/icons-material";
import AddIcon from "@mui/icons-material/Add";
import { Stack, Typography } from "@mui/material";
import {
  Button,
  ITableColumn,
  Pagination,
  Table,
  TextField,
} from "@pishroo/admin-components";
import { FC } from "react";
import { Controller } from "react-hook-form";

import TEXTS from "@pishroo/texts";

import { FilterSidebar, TableCellAction } from "@admin/components";

import useData from "./useDate";

export const ProducerActionListPage: FC = () => {
  const {
    rows,
    loading,
    pageInfo,
    handleSubmitFilter,
    onSubmitFilter,
    onClearFilter,
    control,
    errors,
    isValid,
    onPageSelect,
    onEdit,
    onNew,
  } = useData();

  const columns: ITableColumn<(typeof rows)[0]>[] = [
    {
      name: "text",
      cell: (item) => <p>{item.text}</p>,
      label: TEXTS.NAME,
    },
    {
      name: "user",
      cell: (item) => (
        <p>
          {item?.user?.firstName} {item?.user?.lastName}
        </p>
      ),
      label: TEXTS.USER,
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
          <Typography variant="h4">
            {TEXTS.PAGE_PRODUCER_ACTION__PRODUCER_ACTION}
          </Typography>
          {renderFilterSidebar()}
        </Stack>
        <Button
          variant="outlined"
          label={TEXTS.PAGE_PRODUCER_ACTION__NEW_PRODUCER_ACTION}
          color="secondary"
          onClick={onNew}
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
            name="search"
            control={control}
            render={({ field }) => (
              <TextField
                placeholder={TEXTS.SEARCH}
                label={TEXTS.SEARCH}
                error={errors.search !== undefined}
                helperText={errors.search?.message}
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

export default ProducerActionListPage;
