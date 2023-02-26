import { FC } from "react";
import { Stack, Typography, Box } from "@mui/material";
import { Controller } from "react-hook-form";

import { Button, TextField, Checkbox } from "@pishroo/admin-components";
import TEXTS from "@pishroo/texts";

import useData from "./useDate";
import { AutoCompleteMultiCustomer, AutoCompleteUser } from "@admin/components";

export const MessageDetails: FC = () => {
  const { isValid, control, errors, handleSubmit, onSubmit, loading } =
    useData();

  return (
    <Box sx={{ mb: 3 }}>
      <Typography variant="h4" sx={{ mb: 2 }}>
        {TEXTS.PAGE_MESSAGE_UPDATE__UPDATE_MESSAGE}
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
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
                disabled={loading}
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
          <Controller
            name="customerIds"
            control={control}
            render={({ field: { onBlur, onChange, ref, value } }) => (
              <AutoCompleteMultiCustomer
                onBlur={onBlur}
                label={TEXTS.CUSTOMER}
                customerIds={value}
                onChange={(customerIds) => onChange(customerIds)}
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
                disabled={loading}
              />
            )}
          />
          <Button
            fullWidth
            size="large"
            type="submit"
            variant="contained"
            label={TEXTS.UPDATE}
            disabled={!isValid || loading}
            loading={loading}
          />
        </Stack>
      </form>
    </Box>
  );
};

export default MessageDetails;
