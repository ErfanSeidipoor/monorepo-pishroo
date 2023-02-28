import { Stack, Typography } from "@mui/material";
import { FC } from "react";
import { Controller } from "react-hook-form";

import { Button, TextField } from "@pishroo/admin-components";
import TEXTS from "@pishroo/texts";

import { AutoCompleteProperty } from "@admin/components";

import useData from "./useDate";

export const NewProductPropertyPage: FC = () => {
  const { isValid, control, errors, handleSubmit, onSubmit, loading } =
    useData();

  return (
    <>
      <Typography variant="h4" sx={{ mb: 3 }}>
        {TEXTS.PAGE_NEW_PRODUCT_PROPERTY__NEW_PRODUCT_PROPERTY}
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={3}>
          <Controller
            name="propertyId"
            control={control}
            render={({ field: { onBlur, onChange, ref, value } }) => (
              <AutoCompleteProperty
                onBlur={onBlur}
                label={TEXTS.PROPERTY}
                propertyId={value}
                onChange={(propertyId) => onChange(propertyId)}
                inputRef={ref}
              />
            )}
          />
          <Controller
            name="value"
            control={control}
            render={({ field }) => (
              <TextField
                placeholder={TEXTS.VALUE}
                label={TEXTS.VALUE}
                error={errors.value !== undefined}
                helperText={errors.value?.message}
                {...field}
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

export default NewProductPropertyPage;
