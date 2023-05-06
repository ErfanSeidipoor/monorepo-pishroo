import { Box, Stack, Typography } from "@mui/material";
import { FC } from "react";
import { Controller } from "react-hook-form";

import { Button, TextField } from "@pishroo/admin-components";
import TEXTS from "@pishroo/texts";

import useData from "./useDate";

export const CallDetails: FC = () => {
  const { isValid, control, errors, handleSubmit, onSubmit, loading, call } =
    useData();

  const renderDetails = () => {
    if (loading) return <></>;
    return (
      <div>
        <div>
          {TEXTS.USER}: {call?.user?.firstName} {call?.user?.lastName}
        </div>
        {call?.customer && (
          <div>
            {TEXTS.CUSTOMER}:{" "}
            {`${call?.customer?.firstName} ${call?.customer?.lastName} (${call?.customer?.jobTitle})`}
          </div>
        )}
        {call?.transporter && (
          <div>
            {TEXTS.TRANSPORTER}:{" "}
            {`${call?.transporter?.name} (${call?.transporter.city.name})`}
          </div>
        )}
        {call?.producer && (
          <div>
            {TEXTS.PRODUCER}:{" "}
            {`${call?.producer?.name} (${call?.producer.city.name})`}
          </div>
        )}
      </div>
    );
  };

  return (
    <Box sx={{ mb: 3 }}>
      <Typography variant="h4" sx={{ mb: 2 }}>
        {TEXTS.PAGE_CALL_UPDATE__UPDATE_CALL}
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={3}>
          <Controller
            name="newPhone"
            control={control}
            render={({ field }) => (
              <TextField
                placeholder={TEXTS.PHONE}
                label={TEXTS.PHONE}
                error={errors.newPhone !== undefined}
                helperText={errors.newPhone?.message}
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

      {renderDetails()}
    </Box>
  );
};

export default CallDetails;
