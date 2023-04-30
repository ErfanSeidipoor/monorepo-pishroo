import { Box, Stack, Typography } from "@mui/material";
import { FC } from "react";
import { Controller } from "react-hook-form";

import { Button, TextField } from "@pishroo/admin-components";
import TEXTS from "@pishroo/texts";

import useData from "./useDate";

export const ProducerActionDetails: FC = () => {
  const { isValid, control, errors, handleSubmit, onSubmit, loading } =
    useData();

  return (
    <Box sx={{ mb: 3 }}>
      <Typography variant="h4" sx={{ mb: 2 }}>
        {TEXTS.PAGE_PRODUCER_ACTION_UPDATE__UPDATE_PRODUCER_ACTION}
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={3}>
          <Controller
            name="text"
            control={control}
            render={({ field }) => (
              <TextField
                multiline
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
            label={TEXTS.UPDATE}
            disabled={!isValid || loading}
            loading={loading}
          />
        </Stack>
      </form>
    </Box>
  );
};

export default ProducerActionDetails;
