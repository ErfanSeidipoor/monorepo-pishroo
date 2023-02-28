import { FC } from "react";
import { Stack, Typography, Box } from "@mui/material";
import { Controller } from "react-hook-form";

import { Button, TextField, Checkbox, Select } from "@pishroo/admin-components";
import TEXTS from "@pishroo/texts";
import { PropertyUnitEnum } from "@pishroo/enums";

import useData from "./useDate";

export const PropertyDetails: FC = () => {
  const { isValid, control, errors, handleSubmit, onSubmit, loading } =
    useData();

  return (
    <Box sx={{ mb: 3 }}>
      <Typography variant="h4" sx={{ mb: 2 }}>
        {TEXTS.PAGE_PROPERTY_UPDATE__UPDATE_PROPERTY}
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
            render={({ field: { onBlur, onChange, ref, value } }) => (
              <Select
                onBlur={onBlur}
                inputRef={ref}
                items={Object.values(PropertyUnitEnum)}
                getLabel={(item: PropertyUnitEnum) => item.toString()}
                getValue={(item: PropertyUnitEnum) => item.toString()}
                value={value || ""}
                onChange={(e) => onChange(e.target.value)}
                placeholder={TEXTS.UNIT}
                label={TEXTS.UNIT}
                error={errors.unit !== undefined}
                helperText={errors.unit?.message}
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
            label={TEXTS.UPDATE}
            disabled={!isValid || loading}
            loading={loading}
          />
        </Stack>
      </form>
    </Box>
  );
};

export default PropertyDetails;
