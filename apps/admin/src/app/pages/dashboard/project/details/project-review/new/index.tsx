import { FC } from "react";
import { Stack, Typography } from "@mui/material";
import { Controller } from "react-hook-form";

import { Button, TextField, Checkbox } from "@pishroo/admin-components";
import TEXTS from "@pishroo/texts";

import useData from "./useDate";

export const NewProjectReviewPage: FC = () => {
  const { isValid, control, errors, handleSubmit, onSubmit, loading } =
    useData();

  return (
    <>
      <Typography variant="h4" sx={{ mb: 3 }}>
        {TEXTS.PAGE_NEW_PROJECT_REVIEW__NEW_PROJECT_REVIEW}
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={3}>
          <Controller
            name="fileId"
            control={control}
            render={({ field }) => (
              <TextField
                placeholder={TEXTS.IMAGES}
                label={TEXTS.IMAGES}
                error={errors.fileId !== undefined}
                helperText={errors.fileId?.message}
                {...field}
                disabled={loading}
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
                disabled={loading}
              />
            )}
          />
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

export default NewProjectReviewPage;
