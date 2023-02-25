import { Box, Stack, Typography } from "@mui/material";
import { Controller } from "react-hook-form";
import { FC } from "react";

import { AutoCompleteMultiColor } from "@admin/components";

import { Button } from "@pishroo/admin-components";
import TEXTS from "@pishroo/texts";

import useData from "./useDate";

export const ProductColors: FC = () => {
  const { isValid, control, handleSubmit, onSubmit, loading } = useData();

  return (
    <Box sx={{ mb: 3 }}>
      <Typography variant="h4" sx={{ mb: 2 }}>
        {TEXTS.COLORS}
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={3}>
          <Controller
            name="colorIds"
            control={control}
            render={({ field: { onBlur, onChange, ref, value } }) => (
              <AutoCompleteMultiColor
                onBlur={onBlur}
                label={TEXTS.COLORS}
                colorIds={value}
                onChange={(colorIds) => {
                  console.log({ colorIds });

                  onChange(colorIds);
                }}
                inputRef={ref}
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

export default ProductColors;
