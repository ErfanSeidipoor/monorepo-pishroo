import { FC, useState } from "react";
import { Container } from "@mui/material";

import Header from "./components/header";
import Breadcrumbs from "./components/breadcrumbs";
import Navbar from "./components/navbar";
import { Main, StyledRoot } from "./style";
import Context, { IConfig } from "./context";

const Layout: FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [config, setConfig] = useState<IConfig>({
    pageName: "",
    breadcrumbs: {},
  });

  return (
    <Context.Provider
      value={{
        config,
        setConfig,
      }}
    >
      <StyledRoot>
        <Header />
        <Navbar />
        <Main>
          <Container>
            <Breadcrumbs />
            {children}
          </Container>
        </Main>
      </StyledRoot>
    </Context.Provider>
  );
};

export default Layout;
