import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import { Typography, Container, Box } from "@mui/material";

import TEXTS from "@pishroo/texts";
import { Button } from "@pishroo/admin-components";
import { PUBLIC_LOGIN_ROUTE } from "@admin/constants";

import { StyledContent } from "./style";
import useData from "./useData";
import assets from "./assets";

export const MainPage = () => {
  const navigate = useNavigate();
  useData();

  return (
    <>
      <Helmet>
        <title> {TEXTS.PAGE_MAIN__PAGE_TTTLE} </title>
      </Helmet>

      <Container>
        <StyledContent sx={{ textAlign: "center", alignItems: "center" }}>
          <Typography variant="h3" paragraph>
            {TEXTS.PAGE_MAIN__TITLE}
          </Typography>

          <Box
            component="img"
            src={assets.images.login.src}
            alt={assets.images.login.alt}
            sx={{ height: 260, mx: "auto", my: { xs: 5, sm: 10 } }}
          />

          <Button
            onClick={() => navigate(PUBLIC_LOGIN_ROUTE)}
            size="large"
            variant="contained"
            label={TEXTS.PAGE_NOT_FOUND__GO_TO_LOGIN_PAGE}
          />
        </StyledContent>
      </Container>
    </>
  );
};

export default MainPage;
