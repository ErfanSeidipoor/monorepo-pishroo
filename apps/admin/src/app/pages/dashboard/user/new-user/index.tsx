import { FC } from "react";
import { Stack, Typography } from "@mui/material";
import { Controller } from "react-hook-form";

import {
  Button,
  TextField,
  Checkbox,
  MultipleSelect,
} from "@pishroo/admin-components";
import TEXTS from "@pishroo/texts";

import useData from "./useDate";
import { UserRoleEnum } from "@pishroo/enums";

export const NewProductPage: FC = () => {
  const { isValid, control, errors, handleSubmit, onSubmit, loading } =
    useData();

  return (
    <>
      <Typography variant="h4" sx={{ mb: 3 }}>
        {TEXTS.PAGE_NEW_USER__NEW_USER}
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
            name="password"
            control={control}
            render={({ field }) => (
              <TextField
                placeholder={TEXTS.PASSWORD}
                label={TEXTS.PASSWORD}
                error={errors.password !== undefined}
                helperText={errors.password?.message}
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

export default NewProductPage;
