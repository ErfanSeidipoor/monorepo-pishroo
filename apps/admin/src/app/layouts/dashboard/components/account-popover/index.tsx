import {
  Box,
  Divider,
  Typography,
  Stack,
  MenuItem,
  Avatar,
  IconButton,
  Popover,
} from "@mui/material";

import TEXTS from "@pishroo/texts";

import { DASHBOARD_ROUTE } from "@admin/constants";

import useData from "./useData";
import assets from "./assets";

const MENU_OPTIONS = [
  {
    label: TEXTS.DASHBOARD_LAYOUT__HOME,
    path: DASHBOARD_ROUTE,
  },
  {
    label: TEXTS.DASHBOARD_LAYOUT__PROFILE,
    path: DASHBOARD_ROUTE,
  },
  {
    label: TEXTS.DASHBOARD_LAYOUT__SETTING,
    path: DASHBOARD_ROUTE,
  },
];

export const AccountPopover = () => {
  const { handleClose, handleOpen, open, currentUser, logOut, navigate } =
    useData();

  return (
    <>
      <IconButton onClick={(event) => handleOpen(event)} sx={{ p: 0 }}>
        <Avatar src={assets.images.avatar.src} alt={assets.images.avatar.alt} />
      </IconButton>

      <Popover
        open={Boolean(open)}
        anchorEl={open}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        PaperProps={{
          sx: {
            p: 0,
            mt: 1.5,
            ml: 0.75,
            width: 180,
            "& .MuiMenuItem-root": {
              typography: "body2",
              borderRadius: 0.75,
            },
          },
        }}
      >
        <Box sx={{ my: 1.5, px: 2.5 }}>
          <Typography variant="subtitle2" noWrap>
            {currentUser?.firstName} {currentUser?.lastName}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }} noWrap>
            {currentUser?.email}
          </Typography>
        </Box>

        <Divider sx={{ borderStyle: "dashed" }} />

        <Stack sx={{ p: 1 }}>
          {MENU_OPTIONS.map((option) => (
            <MenuItem
              key={option.label}
              onClick={() => {
                handleClose();
                navigate(option.path);
              }}
            >
              {option.label}
            </MenuItem>
          ))}
        </Stack>

        <Divider sx={{ borderStyle: "dashed" }} />

        <MenuItem onClick={logOut} sx={{ m: 1 }}>
          {TEXTS.DASHBOARD_LAYOUT__LOGOUT}
        </MenuItem>
      </Popover>
    </>
  );
};

export default AccountPopover;
