import { Box, Stack, Typography } from "@mui/material";
import { Controller } from "react-hook-form";
import { FC } from "react";

import { AutoCompleteMultiProvince } from "@admin/components";

import { Button } from "@pishroo/admin-components";
import TEXTS from "@pishroo/texts";

import useData from "./useDate";

export const ProductColors: FC = () => {
  const { isValid, control, handleSubmit, onSubmit, loading } = useData();

  return (
    <Box sx={{ mb: 3 }}>
      <Typography variant="h4" sx={{ mb: 2 }}>
        {TEXTS.PROVINCES}
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={3}>
          <Controller
            name="provinceIds"
            control={control}
            render={({ field: { onBlur, onChange, ref, value } }) => (
              <AutoCompleteMultiProvince
                onBlur={onBlur}
                label={TEXTS.PROVINCES}
                provinceIds={value}
                onChange={(provinceIds) => {
                  onChange(provinceIds);
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
