// ----------------------------------------------------------------------

export default function Popover(theme: any) {
  return {
    MuiPopover: {
      styleOverrides: {
        paper: {
          boxShadow: theme.customShadows.z12,
        },
      },
    },
  };
}
