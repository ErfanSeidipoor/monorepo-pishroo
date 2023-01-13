// ----------------------------------------------------------------------

export default function Skeleton(theme: any) {
  return {
    MuiSkeleton: {
      defaultProps: {
        animation: "wave",
      },

      styleOverrides: {
        root: {
          backgroundColor: theme.palette.background.neutral,
        },
      },
    },
  };
}
