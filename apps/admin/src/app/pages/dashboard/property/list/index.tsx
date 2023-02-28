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

import {
  Button,
  Checkbox,
  MultipleSelect,
  TextField,
} from "@pishroo/admin-components";
import TEXTS from "@pishroo/texts";
import { ITableColumn, Table, Pagination } from "@pishroo/admin-components";

import { FilterSidebar, TableCellAction } from "@admin/components";
import { DASHBOARD_PROPERTY_NEW_PROPERTY_ROUTE } from "@admin/constants";

import useData from "./useDate";
import { PropertyUnitEnum } from "@pishroo/enums";

export const PropertyListPage: FC = () => {
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
    onUpdatePropertyActivation,
  } = useData();

  const columns: ITableColumn<typeof rows[0]>[] = [
    {
      name: "name",
      cell: (item) => <p>{item.name}</p>,
      label: TEXTS.NAME,
    },
    {
      name: "unit",
      cell: (item) => <p>{item.unit}</p>,
      label: TEXTS.UNIT,
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
          <Typography variant="h4">{TEXTS.PAGE_PROPERTY__PROPERTY}</Typography>
          {renderFilterSidebar()}
        </Stack>
        <Button
          variant="outlined"
          label={TEXTS.PAGE_PROPERTY__NEW_PROPERTY}
          color="secondary"
          onClick={() => navigate(DASHBOARD_PROPERTY_NEW_PROPERTY_ROUTE)}
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
            name="units"
            control={control}
            render={({ field: { onBlur, onChange, ref, value } }) => (
              <MultipleSelect
                onBlur={onBlur}
                inputRef={ref}
                disabled={loading}
                label={TEXTS.UNIT}
                items={Object.values(PropertyUnitEnum)}
                selectedItems={value}
                onSelectItems={(value) => onChange(value)}
                getLabel={(item: PropertyUnitEnum) => item.toString()}
                getValue={(item: PropertyUnitEnum) =>
                  Object.values(PropertyUnitEnum).indexOf(item)
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

  const renderActivationDialog = () => {
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
            {TEXTS.NAME}: {activationItem?.name}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => setActivationItem(undefined)}
            label={TEXTS.CANCEL}
            color="inherit"
          />
          <Button onClick={onUpdatePropertyActivation} label={TEXTS.CONFIRM} />
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

export default PropertyListPage;
