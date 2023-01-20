import { Container, Typography } from "@mui/material";
import { Helmet } from "react-helmet-async";
// style
import { StyledContent, StyledRoot, StyledSection } from "./style";

export const LoginPage = () => {
  return (
    <>
      <Helmet>
        <title> Login | Minimal UI </title>
      </Helmet>
      <StyledRoot>
        <StyledSection>
          <Typography variant="h3" sx={{ px: 5, mt: 10, mb: 5 }}>
            Hi, Welcome Back
          </Typography>
          <img src="/assets/illustrations/illustration_login.png" alt="login" />
        </StyledSection>

        <Container maxWidth="sm">
          <StyledContent>
            <Typography variant="h4" gutterBottom>
              Sign in to Minimal
            </Typography>

            {/* <LoginForm /> */}
          </StyledContent>
        </Container>
      </StyledRoot>
    </>
  );
};

export default LoginPage;
