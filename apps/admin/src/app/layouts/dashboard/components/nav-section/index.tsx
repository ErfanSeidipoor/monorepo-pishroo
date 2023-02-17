import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { Box, List, ListItemText } from "@mui/material";
import NaturePeopleTwoToneIcon from "@mui/icons-material/NaturePeopleTwoTone";
import DashboardTwoToneIcon from "@mui/icons-material/DashboardTwoTone";
import PermIdentityTwoToneIcon from "@mui/icons-material/PermIdentityTwoTone";

import TEXTS from "@pishroo/texts";
import { DASHBOARD_PRODUCT_ROUTE, DASHBOARD_ROUTE } from "@admin/constants";

import { StyledNavItem, StyledNavItemIcon } from "./style";

export const NavSection: FC = () => {
  const navigate = useNavigate();

  const ITEMS = [
    {
      title: TEXTS.DASHBOARD,
      path: DASHBOARD_ROUTE,
      icon: <DashboardTwoToneIcon />,
    },
    {
      title: TEXTS.PRODUCT,
      path: DASHBOARD_PRODUCT_ROUTE,
      icon: <NaturePeopleTwoToneIcon />,
    },
    {
      title: TEXTS.USER,
      path: DASHBOARD_PRODUCT_ROUTE,
      icon: <PermIdentityTwoToneIcon />,
    },
  ];

  return (
    <Box>
      <List disablePadding sx={{ p: 1 }}>
        {ITEMS.map((item) => (
          <StyledNavItem
            key={item.title}
            onClick={() => navigate(item.path)}
            sx={{
              "&.active": {
                color: "text.primary",
                bgcolor: "action.selected",
                fontWeight: "fontWeightBold",
              },
            }}
          >
            <StyledNavItemIcon>{item.icon}</StyledNavItemIcon>
            <ListItemText disableTypography primary={item.title} />
          </StyledNavItem>
        ))}
      </List>
    </Box>
  );
};

export default NavSection;