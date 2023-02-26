import { Box, Stack, Typography } from "@mui/material";
import { Controller } from "react-hook-form";
import { FC } from "react";

import { AutoCompleteMultiCategory } from "@admin/components";

import { Button } from "@pishroo/admin-components";
import TEXTS from "@pishroo/texts";

import useData from "./useDate";

export const ProductCategories: FC = () => {
  const { isValid, control, handleSubmit, onSubmit, loading } = useData();

  return (
    <Box sx={{ mb: 3 }}>
      <Typography variant="h4" sx={{ mb: 2 }}>
        {TEXTS.CATEGORIES}
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={3}>
          <Controller
            name="categoryIds"
            control={control}
            render={({ field: { onBlur, onChange, ref, value } }) => (
              <AutoCompleteMultiCategory
                onBlur={onBlur}
                label={TEXTS.CATEGORIES}
                categoryIds={value}
                onChange={(categoryIds) => {
                  onChange(categoryIds);
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

export default ProductCategories;
