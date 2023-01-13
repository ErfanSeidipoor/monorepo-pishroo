// ----------------------------------------------------------------------

export default function Stepper(theme: any) {
  return {
    MuiStepConnector: {
      styleOverrides: {
        line: {
          borderColor: theme.palette.divider,
        },
      },
    },
  };
}
