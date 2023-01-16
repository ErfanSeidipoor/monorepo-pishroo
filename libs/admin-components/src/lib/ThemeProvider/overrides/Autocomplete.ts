import { Theme } from "@mui/material";

export default function Autocomplete(theme: Theme) {
  return {
    MuiAutocomplete: {
      styleOverrides: {
        paper: {
          boxShadow: theme.shadows[11],
        },
      },
    },
  };
}
