// ----------------------------------------------------------------------

export default function Avatar(theme: any) {
  return {
    MuiAvatar: {
      styleOverrides: {
        colorDefault: {
          color: theme.palette.text.secondary,
          backgroundColor: theme.palette.grey[400],
        },
      },
    },
    MuiAvatarGroup: {
      styleOverrides: {
        avatar: {
          fontSize: 16,
          fontWeight: theme.typography.fontWeightMedium,
          border: "none !important",
          "&:first-of-type": {
            fontSize: 14,
            color: theme.palette.primary.main,
            backgroundColor: theme.palette.primary.lighter,
          },
        },
      },
    },
  };
}
