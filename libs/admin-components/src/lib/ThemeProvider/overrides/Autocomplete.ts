// ----------------------------------------------------------------------

export default function Autocomplete(theme: any) {
  return {
    MuiAutocomplete: {
      styleOverrides: {
        root: {
          ".MuiAutocomplete-inputRoot": {
            backgroundColor: theme.palette.grey[900],
            border: `1px solid ${theme.palette.grey[700]}`,
            padding: theme.spacing(0.2),
          },
          fieldset: {
            "&.MuiOutlinedInput-notchedOutline": {
              border: "none",
            },
          },
          ".Mui-focused": {
            boxShadow: theme.customShadows.input,
            borderColor: theme.palette.primary.main,
          },
        },

        paper: {
          boxShadow: theme.customShadows.z20,
          marginTop: theme.spacing(1),
        },
        input: {
          "&::placeholder": {
            opacity: 1,
            color: theme.palette.text.disabled,
          },
          borderRadius: theme.shape.borderRadius,
          position: "relative",
          backgroundColor: "transparent",
          border: "none",
          fontSize: 17,
          fontWeight: 400,
          padding: theme.spacing(0.9, 1),
          "&:focus": {
            boxShadow: "none",
            borderColor: "none",
          },
        },
      },
    },
  };
}
