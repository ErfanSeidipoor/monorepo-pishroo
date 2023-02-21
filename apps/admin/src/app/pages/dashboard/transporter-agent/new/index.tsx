import { FC } from "react";
import { Stack, Typography } from "@mui/material";
import { Controller } from "react-hook-form";

import { AutoCompleteTransporter } from "@admin/components";

import { Button, TextField, Checkbox } from "@pishroo/admin-components";
import TEXTS from "@pishroo/texts";

import useData from "./useDate";

export const NewTransporterAgentPage: FC = () => {
  const { isValid, control, errors, handleSubmit, onSubmit, loading } =
    useData();

  return (
    <>
      <Typography variant="h4" sx={{ mb: 3 }}>
        {TEXTS.PAGE_NEW_TRANSPORTER_AGENT__NEW_TRANSPORTER_AGENT}
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={3}>
          <Controller
            name="firstName"
            control={control}
            render={({ field }) => (
              <TextField
                placeholder={TEXTS.FIRSTNAME}
                label={TEXTS.FIRSTNAME}
                error={errors.firstName !== undefined}
                helperText={errors.firstName?.message}
                {...field}
                disabled={loading}
              />
            )}
          />
          <Controller
            name="lastName"
            control={control}
            render={({ field }) => (
              <TextField
                placeholder={TEXTS.LASTNAME}
                label={TEXTS.LASTNAME}
                error={errors.lastName !== undefined}
                helperText={errors.lastName?.message}
                {...field}
                disabled={loading}
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
                disabled={loading}
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
                disabled={loading}
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
          <Controller
            name="transporterId"
            control={control}
            render={({ field: { onBlur, onChange, ref, value } }) => (
              <AutoCompleteTransporter
                onBlur={onBlur}
                label={TEXTS.TRANSPORTER}
                transporterId={value}
                onChange={(transporterId) => onChange(transporterId)}
                inputRef={ref}
              />
            )}
          />
          <Controller
            name="description"
            control={control}
            render={({ field }) => (
              <TextField
                placeholder={TEXTS.DESCRIPTION}
                label={TEXTS.DESCRIPTION}
                error={errors.description !== undefined}
                helperText={errors.description?.message}
                {...field}
                multiline
                disabled={loading}
              />
            )}
          />
          <Button
            fullWidth
            size="large"
            type="submit"
            variant="contained"
            label={TEXTS.CREATE}
            disabled={!isValid || loading}
            loading={loading}
          />
        </Stack>
      </form>
    </>
  );
};

export default NewTransporterAgentPage;
