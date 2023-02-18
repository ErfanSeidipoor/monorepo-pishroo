import { FC } from "react";
import { Stack, Typography, Box } from "@mui/material";
import { Controller } from "react-hook-form";

import { Button, TextField, MultipleSelect } from "@pishroo/admin-components";
import TEXTS from "@pishroo/texts";

import useData from "./useDate";
import { UserRoleEnum } from "@pishroo/enums";

export const ProductDetails: FC = () => {
  const { isValid, control, errors, handleSubmit, onSubmit, loading } =
    useData();

  return (
    <Box sx={{ mb: 3 }}>
      <Typography variant="h4" sx={{ mb: 2 }}>
        {TEXTS.PAGE_USER_UPDATE__UPDATE_USER}
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={3}>
          <Controller
            name="username"
            control={control}
            render={({ field }) => (
              <TextField
                placeholder={TEXTS.USERNAME}
                label={TEXTS.USERNAME}
                error={errors.username !== undefined}
                helperText={errors.username?.message}
                {...field}
                disabled={loading}
              />
            )}
          />
          <Controller
            name="firstName"
            control={control}
            render={({ field }) => (
              <TextField
                placeholder={TEXTS.FIRSTNAME}
                label={TEXTS.FIRSTNAME}
                error={errors.firstName !== undefined}
                helperText={errors.firstName?.message}
                {...field}
                disabled={loading}
              />
            )}
          />
          <Controller
            name="lastName"
            control={control}
            render={({ field }) => (
              <TextField
                placeholder={TEXTS.LASTNAME}
                label={TEXTS.LASTNAME}
                error={errors.lastName !== undefined}
                helperText={errors.lastName?.message}
                {...field}
                disabled={loading}
              />
            )}
          />{" "}
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <TextField
                placeholder={TEXTS.EMAIL}
                label={TEXTS.EMAIL}
                error={errors.email !== undefined}
                helperText={errors.email?.message}
                {...field}
                disabled={loading}
              />
            )}
          />
          <Controller
            name="phone"
            control={control}
            render={({ field }) => (
              <TextField
                placeholder={TEXTS.PHONE}
                label={TEXTS.PHONE}
                error={errors.phone !== undefined}
                helperText={errors.phone?.message}
                {...field}
                disabled={loading}
              />
            )}
          />
          <Controller
            name="roles"
            control={control}
            render={({ field: { onBlur, onChange, ref, value } }) => (
              <MultipleSelect
                onBlur={onBlur}
                inputRef={ref}
                disabled={loading}
                label={TEXTS.ROLE}
                items={Object.values(UserRoleEnum)}
                selectedItems={value}
                onSelectItems={(value) => onChange(value)}
                getLabel={(item: UserRoleEnum) => item.toString()}
                getValue={(item: UserRoleEnum) =>
                  Object.values(UserRoleEnum).indexOf(item)
                }
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

export default ProductDetails;
