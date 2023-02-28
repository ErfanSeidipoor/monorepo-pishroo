import { FC } from "react";
import { Stack, Typography } from "@mui/material";
import { Controller } from "react-hook-form";

import { Button, TextField, Checkbox, Select } from "@pishroo/admin-components";
import { PropertyUnitEnum } from "@pishroo/enums";
import TEXTS from "@pishroo/texts";

import useData from "./useDate";

export const NewPropertyPage: FC = () => {
  const { isValid, control, errors, handleSubmit, onSubmit, loading } =
    useData();

  return (
    <>
      <Typography variant="h4" sx={{ mb: 3 }}>
        {TEXTS.PAGE_NEW_PROPERTY__NEW_PROPERTY}
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
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
                disabled={loading}
              />
            )}
          />
          <Controller
            name="unit"
            control={control}
            render={({ field }) => (
              <Select
                items={Object.values(PropertyUnitEnum)}
                getLabel={(item: PropertyUnitEnum) => item.toString()}
                getValue={(item: PropertyUnitEnum) => item.toString()}
                placeholder={TEXTS.UNIT}
                label={TEXTS.UNIT}
                error={errors.unit !== undefined}
                helperText={errors.unit?.message}
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

export default NewPropertyPage;
