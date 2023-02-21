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

import { Button, Checkbox, TextField } from "@pishroo/admin-components";
import TEXTS from "@pishroo/texts";
import { ITableColumn, Table, Pagination } from "@pishroo/admin-components";

import {
  AutoCompleteProducer,
  FilterSidebar,
  TableCellAction,
} from "@admin/components";
import { DASHBOARD_PRODUCER_AGENT_NEW_PRODUCER_AGENT_ROUTE } from "@admin/constants";

import useData from "./useDate";

export const ProducerAgentListPage: FC = () => {
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
    onUpdateProducerAgentActivation,
  } = useData();

  const columns: ITableColumn<typeof rows[0]>[] = [
    {
      name: "name",
      cell: (item) => (
        <p>
          {item.firstName} <br /> {item.lastName}
        </p>
      ),
      label: TEXTS.NAME,
    },

    { name: "email", cell: (item) => <p>{item.email}</p>, label: TEXTS.EMAIL },
    {
      name: "phone",
      cell: (item) => (
        <p>
          {item.phone} <br />
        </p>
      ),
      label: TEXTS.PHONE,
    },
    {
      name: "producer",
      cell: (item) => (
        <p>
          {item.producer.name} <br />
        </p>
      ),
      label: TEXTS.PRODUCER,
    },
    {
      name: "city",
      cell: (item) => (
        <p>
          {item.producer.city.name} <br />
          {item.producer.city.province.name}
        </p>
      ),
      label: TEXTS.CITY,
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
          <Typography variant="h4">
            {TEXTS.PAGE_PRODUCER_AGENT__PRODUCER_AGENT}
          </Typography>
          {renderFilterSidebar()}
        </Stack>
        <Button
          variant="outlined"
          label={TEXTS.PAGE_PRODUCER_AGENT__NEW_PRODUCER_AGENT}
          color="secondary"
          onClick={() =>
            navigate(DASHBOARD_PRODUCER_AGENT_NEW_PRODUCER_AGENT_ROUTE)
          }
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
          <Controller
            name="producerId"
            control={control}
            render={({ field: { onBlur, onChange, ref, value } }) => (
              <AutoCompleteProducer
                onBlur={onBlur}
                label={TEXTS.PRODUCER}
                producerId={value}
                onChange={(provinceId) => onChange(provinceId)}
                inputRef={ref}
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
            {TEXTS.NAME}: {activationItem?.firstName} {activationItem?.lastName}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => setActivationItem(undefined)}
            label={TEXTS.CANCEL}
            color="inherit"
          />
          <Button
            onClick={onUpdateProducerAgentActivation}
            label={TEXTS.CONFIRM}
          />
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

export default ProducerAgentListPage;
