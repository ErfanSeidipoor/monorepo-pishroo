import { FC } from "react";
import { Stack, Typography } from "@mui/material";
import { Controller } from "react-hook-form";

import { Button, TextField } from "@pishroo/admin-components";
import TEXTS from "@pishroo/texts";

import useData from "./useData";
import { AutoCompleteProvince } from "@admin/components";

export const NewCityPage: FC = () => {
  const { isValid, control, errors, handleSubmit, onSubmit, loading } =
    useData();

  return (
    <>
      <Typography variant="h4" sx={{ mb: 3 }}>
        {TEXTS.PAGE_NEW_CITY__NEW_CITY}
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
            name="provinceId"
            control={control}
            render={({ field: { onBlur, onChange, ref, value } }) => (
              <AutoCompleteProvince
                onBlur={onBlur}
                label={TEXTS.PROVINCE}
                provinceId={value}
                onChange={(provinceId) => onChange(provinceId)}
                inputRef={ref}
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

export default NewCityPage;
