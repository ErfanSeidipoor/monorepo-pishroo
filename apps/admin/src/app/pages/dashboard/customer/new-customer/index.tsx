import { FC } from "react";
import { Stack, Typography } from "@mui/material";
import { Controller } from "react-hook-form";

import { AutoCompleteCity } from "@admin/components";

import { Button, TextField, Checkbox } from "@pishroo/admin-components";
import TEXTS from "@pishroo/texts";

import useData from "./useDate";

export const NewCustomerPage: FC = () => {
  const { isValid, control, errors, handleSubmit, onSubmit, loading } =
    useData();

  return (
    <>
      <Typography variant="h4" sx={{ mb: 3 }}>
        {TEXTS.PAGE_NEW_CUSTOMER__NEW_CUSTOMER}
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
            name="jobTitle"
            control={control}
            render={({ field }) => (
              <TextField
                placeholder={TEXTS.JOB_TITLE}
                label={TEXTS.JOB_TITLE}
                error={errors.jobTitle !== undefined}
                helperText={errors.jobTitle?.message}
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
            name="officePhone"
            control={control}
            render={({ field }) => (
              <TextField
                placeholder={TEXTS.OFFICE_PHONE}
                label={TEXTS.OFFICE_PHONE}
                error={errors.officePhone !== undefined}
                helperText={errors.officePhone?.message}
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
                multiline
                disabled={loading}
              />
            )}
          />
          <Controller
            name="cityId"
            control={control}
            render={({ field: { onBlur, onChange, ref, value } }) => (
              <AutoCompleteCity
                onBlur={onBlur}
                label={TEXTS.CITY}
                cityId={value}
                onChange={(cityId) => onChange(cityId)}
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
            label={TEXTS.CREATE}
            disabled={!isValid || loading}
            loading={loading}
          />
        </Stack>
      </form>
    </>
  );
};

export default NewCustomerPage;
