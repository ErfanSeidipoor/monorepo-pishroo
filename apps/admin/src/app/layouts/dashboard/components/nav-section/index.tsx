import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { Box, List, ListItemText } from "@mui/material";
import NaturePeopleTwoToneIcon from "@mui/icons-material/NaturePeopleTwoTone";
import DashboardTwoToneIcon from "@mui/icons-material/DashboardTwoTone";
import PermIdentityTwoToneIcon from "@mui/icons-material/PermIdentityTwoTone";
import MapTwoToneIcon from "@mui/icons-material/MapTwoTone";
import MapsHomeWorkTwoToneIcon from "@mui/icons-material/MapsHomeWorkTwoTone";
import CallTwoToneIcon from "@mui/icons-material/CallTwoTone";
import LocalShippingTwoToneIcon from "@mui/icons-material/LocalShippingTwoTone";
import TwoWheelerTwoToneIcon from "@mui/icons-material/TwoWheelerTwoTone";
import FactoryTwoToneIcon from "@mui/icons-material/FactoryTwoTone";
import CarpenterTwoToneIcon from "@mui/icons-material/CarpenterTwoTone";

import TEXTS from "@pishroo/texts";
import {
  DASHBOARD_CITY_ROUTE,
  DASHBOARD_CUSTOMER_ROUTE,
  DASHBOARD_PRODUCER_AGENT_ROUTE,
  DASHBOARD_PRODUCER_ROUTE,
  DASHBOARD_PRODUCT_ROUTE,
  DASHBOARD_PROVINCE_ROUTE,
  DASHBOARD_ROUTE,
  DASHBOARD_TRANSPORTER_AGENT_ROUTE,
  DASHBOARD_TRANSPORTER_ROUTE,
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
    {
      title: TEXTS.CUSTOMER,
      path: DASHBOARD_CUSTOMER_ROUTE,
      icon: <CallTwoToneIcon />,
    },
    {
      title: TEXTS.TRANSPORTER,
      path: DASHBOARD_TRANSPORTER_ROUTE,
      icon: <LocalShippingTwoToneIcon />,
    },
    {
      title: TEXTS.TRANSPORTER_AGENT,
      path: DASHBOARD_TRANSPORTER_AGENT_ROUTE,
      icon: <TwoWheelerTwoToneIcon />,
    },
    {
      title: TEXTS.PRODUCER,
      path: DASHBOARD_PRODUCER_ROUTE,
      icon: <FactoryTwoToneIcon />,
    },
    {
      title: TEXTS.PRODUCER_AGENT,
      path: DASHBOARD_PRODUCER_AGENT_ROUTE,
      icon: <CarpenterTwoToneIcon />,
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
