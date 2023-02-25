import { Controller } from "react-hook-form";
import { FC } from "react";
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
import {
  Button,
  ITableColumn,
  Pagination,
  Table,
  TextField,
} from "@pishroo/admin-components";

import TEXTS from "@pishroo/texts";

import { FilterSidebar, TableCellAction } from "@admin/components";

import useData from "./useDate";

export const ProductReviewListPage: FC = () => {
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
    deleteItem,
    setDeleteItem,
    onDeleteProductReview,
  } = useData();

  const columns: ITableColumn<typeof rows[0]>[] = [
    {
      name: "reviewer",
      cell: (item) => <p>{item.reviewer}</p>,
      label: TEXTS.REVIEWER,
    },
    { name: "text", cell: (item) => <p>{item.text}</p>, label: TEXTS.TEXT },
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
              icon: <DeleteTwoToneIcon color={"error"} />,
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
          <Typography variant="h4">
            {TEXTS.PAGE_PRODUCT_REVIEW__PRODUCT_REVIEW}
          </Typography>
          {renderFilterSidebar()}
        </Stack>
        <Button
          variant="outlined"
          label={TEXTS.PAGE_PRODUCT_REVIEW__NEW_PRODUCT_REVIEW}
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
            name="text"
            control={control}
            render={({ field }) => (
              <TextField
                placeholder={TEXTS.TEXT}
                label={TEXTS.TEXT}
                error={errors.text !== undefined}
                helperText={errors.text?.message}
                {...field}
              />
            )}
          />
          <Controller
            name="reviewer"
            control={control}
            render={({ field }) => (
              <TextField
                placeholder={TEXTS.REVIEWER}
                label={TEXTS.REVIEWER}
                error={errors.reviewer !== undefined}
                helperText={errors.reviewer?.message}
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

  const renderActivationDialog = () => {
    return (
      <Dialog
        fullWidth
        maxWidth={"sm"}
        open={!!deleteItem}
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
            {TEXTS.REVIEWER}: {deleteItem?.reviewer}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => setDeleteItem(undefined)}
            label={TEXTS.CANCEL}
            color="inherit"
          />
          <Button onClick={onDeleteProductReview} label={TEXTS.CONFIRM} />
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

export default ProductReviewListPage;
