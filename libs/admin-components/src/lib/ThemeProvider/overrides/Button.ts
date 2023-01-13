// ----------------------------------------------------------------------

export default function Button(theme: any) {
  return {
    MuiButton: {
      styleOverrides: {
        boxShadow: "none",
        root: {
          whiteSpace: "nowrap",
          textTransform: "none",
          borderRadius: theme.shape.borderRadius,
          "&:hover": {
            boxShadow: "none",
          },
        },
        sizeLarge: {
          height: 50,
        },
        // contained
        containedInherit: {
          color: theme.palette.grey[800],
          // boxShadow: theme.customShadows.z8,
          "&:hover": {
            backgroundColor: theme.palette.grey[400],
          },
        },
        sizeMedium: {
          height: 42,
        },

        sizeSmall: {
          height: 26,
        },
        containedPrimary: {
          // boxShadow: theme.customShadows.primary
          color: theme.palette.primary.light,
          backgroundColor: theme.palette.primary.dark,
          fontSize: "15px",
          fontWeight: 700,
        },
        containedSecondary: {
          // boxShadow: theme.customShadows.secondary,
          color: theme.palette.common.white,
          backgroundColor: theme.palette.primary.dark,
          fontSize: "15px",
          fontWeight: 700,
        },

        containedInfo: {
          color: theme.palette.primary.dark,
          backgroundColor: theme.palette.primary.lighter,
          fontSize: "13px",
          fontWeight: 400,
          borderRadius: "28px",
          "&:hover": {
            backgroundColor: "rgba(210, 222, 234, 0.5)",
          },
        },
        containedSuccess: {
          // boxShadow: theme.customShadows.success
        },
        containedWarning: {
          color: theme.palette.error.main,
          backgroundColor: theme.palette.common.white,
          fontSize: "10px",
          fontWeight: 700,
          border: "3px solid" + theme.palette.error.main,
          borderRadius: "13px",
        },
        containedError: {
          color: theme.palette.common.white,
          backgroundColor: theme.palette.error.main,
          fontSize: "10px",
          fontWeight: 700,
          borderRadius: "5px",
        },
        // outlined
        outlinedPrimary: {
          color: theme.palette.primary.dark,
          backgroundColor: theme.palette.common.white,
          fontSize: "15px",
          fontWeight: 700,
          border: "2px solid" + theme.palette.primary.dark,
        },
        outlinedError: {
          color: theme.palette.error.main,
          backgroundColor: theme.palette.common.white,
          fontSize: "10px",
          fontWeight: 700,
          border: "1px solid" + theme.palette.error.main,
          borderRadius: "13px",
        },
        outlinedInherit: {
          border: `1px solid ${theme.palette.grey[500_32]}`,
          "&:hover": {
            backgroundColor: theme.palette.action.hover,
          },
        },
        textInherit: {
          "&:hover": {
            backgroundColor: theme.palette.action.hover,
          },
        },
        textPrimary: {
          color: theme.palette.secondary.main,
          fontSize: "16px",
          fontWeight: 400,
        },
        textSecondary: {
          color: theme.palette.secondary.main,
          fontSize: "13px",
          fontWeight: 400,
        },
      },
    },
  };
}
