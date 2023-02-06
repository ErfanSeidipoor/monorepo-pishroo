import { FC } from "react";
import { useSelector } from "react-redux";
import Scrollbar from "@admin/components/scrollbar";
import { Avatar, Box, Drawer, Link, Typography } from "@mui/material";

import { selectUserReducer } from "@admin/store/user/user.selector";

import NavSection from "../nav-section";
import { StyledAccount } from "./style";
import assets from "./assets";

const Navbar: FC = () => {
  const { currentUser } = useSelector(selectUserReducer);

  const renderLogo = () => {
    return <Box sx={{ px: 2.5, py: 3, display: "inline-flex" }}>{"Logo"}</Box>;
  };

  const renderUser = () => {
    return (
      <Box sx={{ mb: 5, mx: 2.5 }}>
        <Link underline="none">
          <StyledAccount>
            <Avatar
              src={assets.images.avatar.src}
              alt={assets.images.avatar.alt}
            />

            <Box sx={{ ml: 2 }}>
              <Typography variant="subtitle2" sx={{ color: "text.primary" }}>
                {currentUser?.firstName} {currentUser?.lastName}
              </Typography>

              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                {currentUser?.username}
              </Typography>
            </Box>
          </StyledAccount>
        </Link>
      </Box>
    );
  };

  return (
    <Box component="nav" sx={{ width: 300 }}>
      <Drawer
        open
        variant="permanent"
        PaperProps={{
          sx: {
            width: 300,
            bgcolor: "background.default",
            borderRightStyle: "dashed",
          },
        }}
      >
        <Scrollbar>
          {renderLogo()}
          {renderUser()}
          <NavSection />
        </Scrollbar>
      </Drawer>
    </Box>
  );
};

export default Navbar;
