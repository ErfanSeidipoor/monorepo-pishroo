import { Container, Stack, Typography } from "@mui/material";
import { Helmet } from "react-helmet-async";
import { Controller } from "react-hook-form";

import { Button, TextField } from "@pishroo/admin-components";
import TEXTS from "@pishroo/texts";

import { StyledContent, StyledRoot, StyledSection } from "./style";
import useData from "./useData";
import assets from "./assets";

export const LoginPage = () => {
  const { isValid, control, errors, handleSubmit, onSubmit, loading } =
    useData();

  /* ----------------------------- render functions --------------------------- */

  const renderForm = () => (
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
            />
          )}
        />
        <Controller
          name="password"
          control={control}
          render={({ field }) => (
            <TextField
              placeholder={TEXTS.PASSWORD}
              type={"password"}
              label={TEXTS.PASSWORD}
              error={errors.password !== undefined}
              helperText={errors.password?.message}
              {...field}
            />
          )}
        />

        <Button
          fullWidth
          size="large"
          type="submit"
          variant="contained"
          label="Submit"
          disabled={!isValid || loading}
          loading={loading}
        >
          {TEXTS.PAGE_LOGIN__LOGIN}
        </Button>
      </Stack>
    </form>
  );

  return (
    <>
      <Helmet>
        <title> {TEXTS.PAGE_LOGIN__PAGE_TTTLE} </title>
      </Helmet>
      <StyledRoot>
        <StyledSection>
          <Typography variant="h3" sx={{ px: 5, mt: 10, mb: 20 }}>
            {TEXTS.PAGE_LOGIN__WELCOME}
          </Typography>
          <img src={assets.images.login.src} alt={assets.images.login.alt} />
        </StyledSection>

        <Container maxWidth="sm">
          <StyledContent>
            <Typography variant="h4" gutterBottom>
              {TEXTS.PAGE_LOGIN__SIGN_IN}
            </Typography>
            {renderForm()}
          </StyledContent>
        </Container>
      </StyledRoot>
    </>
  );
};

export default LoginPage;
