// ----------------------------------------------------------------------

export default function Timeline(theme: any) {
  return {
    MuiTimelineDot: {
      styleOverrides: {
        root: {
          boxShadow: "none",
        },
      },
    },

    MuiTimelineConnector: {
      styleOverrides: {
        root: {
          backgroundColor: theme.palette.divider,
        },
      },
    },
  };
}
