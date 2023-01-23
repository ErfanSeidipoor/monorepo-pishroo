import { Container, Stack, Typography } from "@mui/material";
import { Helmet } from "react-helmet-async";

import { Button, TextField } from "@pishroo/admin-components";

// style
import { StyledContent, StyledRoot, StyledSection } from "./style";

export const LoginPage = () => {
  /* ----------------------------- render function ---------------------------- */

  const renderForm = () => (
    <Stack spacing={3}>
      <TextField name="email" label="Email address" />
      <TextField name="password" label="Password" type={"password"} />
      <Button
        fullWidth
        size="large"
        type="submit"
        variant="contained"
        label="Submit"
      >
        Login
      </Button>
    </Stack>
  );
  return (
    <>
      <Helmet>
        <title> Login | Pishroo </title>
      </Helmet>
      <StyledRoot>
        <StyledSection>
          <Typography variant="h3" sx={{ px: 5, mt: 10, mb: 5 }}>
            Hi, Welcome Back
          </Typography>
          <img src="assets/illustration_login.png" alt="login" />
        </StyledSection>

        <Container maxWidth="sm">
          <StyledContent>
            <Typography variant="h4" gutterBottom>
              Sign in to Minimal
            </Typography>

            {/* <LoginForm /> */}
            {renderForm()}
          </StyledContent>
        </Container>
      </StyledRoot>
    </>
  );
};

export default LoginPage;
