import { Stack, Typography } from "@mui/material";
import { FC } from "react";
import { Controller } from "react-hook-form";

import { Button, TextField } from "@pishroo/admin-components";
import TEXTS from "@pishroo/texts";

import useData from "./useDate";

export const NewProducerActionPage: FC = () => {
  const { isValid, control, errors, handleSubmit, onSubmit, loading } =
    useData();

  return (
    <>
      <Typography variant="h4" sx={{ mb: 3 }}>
        {TEXTS.PAGE_NEW_PRODUCER_ACTION__NEW_PRODUCER_ACTION}
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={3}>
          <Controller
            name="text"
            control={control}
            render={({ field }) => (
              <TextField
                placeholder={TEXTS.VALUE}
                label={TEXTS.VALUE}
                error={errors.text !== undefined}
                helperText={errors.text?.message}
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

export default NewProducerActionPage;
