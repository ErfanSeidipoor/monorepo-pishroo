import { FC } from "react";
import { Stack, Typography } from "@mui/material";
import { Controller } from "react-hook-form";

import { Button, TextField, Checkbox } from "@pishroo/admin-components";
import TEXTS from "@pishroo/texts";

import useData from "./useDate";
import { AutoCompleteCity } from "@admin/components";

export const NewProjectPage: FC = () => {
  const { isValid, control, errors, handleSubmit, onSubmit, loading } =
    useData();

  return (
    <>
      <Typography variant="h4" sx={{ mb: 3 }}>
        {TEXTS.PAGE_NEW_PROJECT__NEW_PROJECT}
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
            name="slug"
            control={control}
            render={({ field }) => (
              <TextField
                placeholder={TEXTS.SLUG}
                label={TEXTS.SLUG}
                error={errors.slug !== undefined}
                helperText={errors.slug?.message}
                {...field}
                disabled={loading}
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
          <Controller
            name="lat"
            control={control}
            render={({ field: { onBlur, onChange, ref, value } }) => (
              <TextField
                onBlur={onBlur}
                placeholder={TEXTS.LATITUDE}
                label={TEXTS.LATITUDE}
                error={errors.lat !== undefined}
                helperText={errors.lat?.message}
                onChange={(value) => onChange(value)}
                inputRef={ref}
                value={`${value || ""}`}
                disabled={loading}
              />
            )}
          />
          <Controller
            name="long"
            control={control}
            render={({ field: { onBlur, onChange, ref, value } }) => (
              <TextField
                onBlur={onBlur}
                placeholder={TEXTS.LONGITUDE}
                label={TEXTS.LONGITUDE}
                error={errors.long !== undefined}
                helperText={errors.long?.message}
                onChange={(value) => onChange(value)}
                inputRef={ref}
                value={`${value || ""}`}
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

export default NewProjectPage;
