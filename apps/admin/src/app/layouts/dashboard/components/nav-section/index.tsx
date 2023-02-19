import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { Box, List, ListItemText } from "@mui/material";
import NaturePeopleTwoToneIcon from "@mui/icons-material/NaturePeopleTwoTone";
import DashboardTwoToneIcon from "@mui/icons-material/DashboardTwoTone";
import PermIdentityTwoToneIcon from "@mui/icons-material/PermIdentityTwoTone";
import MapTwoToneIcon from "@mui/icons-material/MapTwoTone";
import MapsHomeWorkTwoToneIcon from "@mui/icons-material/MapsHomeWorkTwoTone";

import TEXTS from "@pishroo/texts";
import {
  DASHBOARD_CITY_ROUTE,
  DASHBOARD_PRODUCT_ROUTE,
  DASHBOARD_PROVINCE_ROUTE,
  DASHBOARD_ROUTE,
  DASHBOARD_USER_ROUTE,
} from "@admin/constants";

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
      path: DASHBOARD_USER_ROUTE,
      icon: <PermIdentityTwoToneIcon />,
    },
    {
      title: TEXTS.PROVINCE,
      path: DASHBOARD_PROVINCE_ROUTE,
      icon: <MapTwoToneIcon />,
    },
    {
      title: TEXTS.CITY,
      path: DASHBOARD_CITY_ROUTE,
      icon: <MapsHomeWorkTwoToneIcon />,
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
