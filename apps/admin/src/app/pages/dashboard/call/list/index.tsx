import {
  DeleteTwoTone as DeleteTwoToneIcon,
  EditTwoTone as EditTwoToneIcon,
} from "@mui/icons-material";
import AddIcon from "@mui/icons-material/Add";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Stack,
  Typography,
} from "@mui/material";
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

import {
  AutoCompleteUser,
  FilterSidebar,
  TableCellAction,
} from "@admin/components";
import { DASHBOARD_CALL_NEW_CALL_ROUTE } from "@admin/constants";

import useData from "./useDate";

export const CallListPage: FC = () => {
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
    activationItem,
    setDeleteItem,
    onDeleteCall,
  } = useData();

  const columns: ITableColumn<(typeof rows)[0]>[] = [
    {
      name: "name",
      cell: (item) => <p>{item.newPhone}</p>,
      label: TEXTS.NAME,
    },
    {
      name: "user",
      cell: (item) => <p>{item.user?.firstName + " " + item.user?.lastName}</p>,
      label: TEXTS.USER,
    },
    {
      name: "description",
      cell: (item) => <p>{item.description}</p>,
      label: TEXTS.DESCRIPTION,
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
            {
              label: TEXTS.DELETE,
              icon: <DeleteTwoToneIcon />,
              onClick: () => setDeleteItem(item),
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
          <Typography variant="h4">{TEXTS.PAGE_CALL__CALL}</Typography>
          {renderFilterSidebar()}
        </Stack>
        <Button
          variant="outlined"
          label={TEXTS.PAGE_CALL__NEW_CALL}
          color="secondary"
          onClick={() => navigate(DASHBOARD_CALL_NEW_CALL_ROUTE)}
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
                placeholder={TEXTS.NAME}
                label={TEXTS.NAME}
                error={errors.search !== undefined}
                helperText={errors.search?.message}
                {...field}
              />
            )}
          />
          <Controller
            name="userId"
            control={control}
            render={({ field: { onBlur, onChange, ref, value } }) => (
              <AutoCompleteUser
                onBlur={onBlur}
                label={TEXTS.USER}
                userId={value}
                onChange={(userId) => onChange(userId)}
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

  const renderActivationDialog = () => {
    return (
      <Dialog
        fullWidth
        maxWidth={"sm"}
        open={!!activationItem}
        onClose={() => setDeleteItem(undefined)}
      >
        <DialogTitle fontSize={20} mb={2}>
          {TEXTS.DELETE}
        </DialogTitle>

        <DialogContent>
          <DialogContentText fontSize={18} mb={1}>
            {TEXTS.DELETE_WARNING_MESSAGE}
          </DialogContentText>
          <DialogContentText fontSize={18}>
            <div>
              {TEXTS.PHONE}: {activationItem?.newPhone}
            </div>
            <div>
              {TEXTS.DESCRIPTION}: {activationItem?.description}
            </div>
            <div>
              {TEXTS.USER}: {activationItem?.user?.firstName}{" "}
              {activationItem?.user?.lastName}
            </div>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => setDeleteItem(undefined)}
            label={TEXTS.CANCEL}
            color="inherit"
          />
          <Button onClick={onDeleteCall} label={TEXTS.CONFIRM} />
        </DialogActions>
      </Dialog>
    );
  };

  return (
    <>
      {renderActivationDialog()}
      {renderActions()}
      {renderTable()}
      {renderPagination()}
    </>
  );
};

export default CallListPage;
