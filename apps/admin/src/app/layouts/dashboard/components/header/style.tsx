import { styled } from "@mui/material/styles";
import { AppBar, Toolbar } from "@mui/material";

export const StyledRoot = styled(AppBar)(({ theme }) => ({
  color: theme.palette.background.default,
  boxShadow: "none",
  [theme.breakpoints.up("lg")]: {
    width: `calc(100% - 300px)`,
  },
}));

export const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  color: theme.palette.background.neutral,
  minHeight: 50,
  [theme.breakpoints.up("lg")]: {
    minHeight: 70,
    padding: theme.spacing(0, 5),
  },
}));
