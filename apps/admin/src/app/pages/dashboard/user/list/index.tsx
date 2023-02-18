import { FC } from "react";
import {
  Typography,
  Stack,
  Chip,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { Controller } from "react-hook-form";
import {
  CheckTwoTone as CheckTwoToneIcon,
  EditTwoTone as EditTwoToneIcon,
} from "@mui/icons-material";

import { UserRoleEnum } from "@pishroo/enums";
import {
  Button,
  Checkbox,
  TextField,
  MultipleSelect,
} from "@pishroo/admin-components";
import TEXTS from "@pishroo/texts";
import { ITableColumn, Table, Pagination } from "@pishroo/admin-components";

import { FilterSidebar, TableCellAction } from "@admin/components";
import { DASHBOARD_PRODUCT_NEW_PRODUCT_ROUTE } from "@admin/constants";

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
    activationItem,
    setActivationItem,
    onUpdateProductActivation,
  } = useData();

  const columns: ITableColumn<typeof rows[0]>[] = [
    {
      name: "name",
      cell: (item) => <p>{item.firstName! + item.lastName!}</p>,
      label: TEXTS.NAME,
    },
    { name: "email", cell: (item) => <p>{item.email}</p>, label: TEXTS.EMAIL },
    { name: "phone", cell: (item) => <p>{item.phone}</p>, label: TEXTS.PHONE },
    {
      name: "username",
      cell: (item) => <p>{item.username}</p>,
      label: TEXTS.USERNMAE,
    },
    {
      name: "isActive",
      cell: (item) => (
        <Chip
          label={item.isActive ? TEXTS.ACTIVE : TEXTS.DEACTIVE}
          color={item.isActive ? "success" : "error"}
        />
      ),
      label: TEXTS.ACTIVATION,
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
              label: item.isActive ? TEXTS.DEACTIVE : TEXTS.ACTIVE,
              icon: (
                <CheckTwoToneIcon color={item.isActive ? "error" : "success"} />
              ),
              onClick: () => setActivationItem(item),
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
            name="phone"
            control={control}
            render={({ field }) => (
              <TextField
                placeholder={TEXTS.PHONE}
                label={TEXTS.PHONE}
                error={errors.phone !== undefined}
                helperText={errors.phone?.message}
                {...field}
              />
            )}
          />
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <TextField
                placeholder={TEXTS.EMAIL}
                label={TEXTS.EMAIL}
                error={errors.email !== undefined}
                helperText={errors.email?.message}
                {...field}
              />
            )}
          />
          <Controller
            name="roles"
            control={control}
            render={({ field: { onBlur, onChange, ref, value } }) => (
              <MultipleSelect
                onBlur={onBlur}
                inputRef={ref}
                disabled={loading}
                label={TEXTS.ROLE}
                items={Object.values(UserRoleEnum)}
                selectedItems={value}
                onSelectItems={(value) => onChange(value)}
                getLabel={(item: UserRoleEnum) => item.toString()}
                getValue={(item: UserRoleEnum) =>
                  Object.values(UserRoleEnum).indexOf(item)
                }
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

  const renderDeleteDialog = () => {
    return (
      <Dialog
        fullWidth
        maxWidth={"sm"}
        open={!!activationItem}
        onClose={() => setActivationItem(undefined)}
      >
        <DialogTitle fontSize={20} mb={2}>
          {activationItem?.isActive ? TEXTS.DEACTIVE : TEXTS.ACTIVE}
        </DialogTitle>

        <DialogContent>
          <DialogContentText fontSize={18} mb={1}>
            {activationItem?.isActive
              ? TEXTS.DEACTIVE_WARNING_MESSAGE
              : TEXTS.ACTIVE_WARNING_MESSAGE}
          </DialogContentText>
          <DialogContentText fontSize={18}>
            {TEXTS.NAME}: {activationItem?.username}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => setActivationItem(undefined)}
            label={TEXTS.CANCEL}
            color="inherit"
          />
          <Button onClick={onUpdateProductActivation} label={TEXTS.CONFIRM} />
        </DialogActions>
      </Dialog>
    );
  };

  return (
    <>
      {renderDeleteDialog()}
      {renderActions()}
      {renderTable()}
      {renderPagination()}
    </>
  );
};

export default UserListPage;
