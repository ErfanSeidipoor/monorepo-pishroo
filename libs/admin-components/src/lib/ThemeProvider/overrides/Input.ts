// ----------------------------------------------------------------------

export default function Input(theme: any) {
  return {
    MuiInputBase: {
      styleOverrides: {
        root: {
          "&.Mui-disabled": {
            "& svg": { color: theme.palette.text.disabled },
          },
          "&": {
            marginTop: theme.spacing(2),
            paddingTop: theme.spacing(0.3),
          },
        },
        input: {
          "&::placeholder": {
            opacity: 1,
            color: theme.palette.text.disabled,
          },
          borderRadius: theme.shape.borderRadius,
          position: "relative",
          backgroundColor: theme.palette.grey[900],
          border: `1px solid ${theme.palette.grey[700]}`,
          fontSize: 17,
          fontWeight: 400,
          padding: theme.spacing(0.9, 1),
          transition: theme.transitions.create([
            "border-color",
            "background-color",
            "box-shadow",
          ]),
          "&:focus": {
            boxShadow: theme.customShadows.input,
            borderColor: theme.palette.primary.main,
          },
        },
      },
    },
    MuiInput: {
      styleOverrides: {
        underline: {
          "&:before": {
            borderBottomColor: theme.palette.grey[500_16],
          },
        },
      },
    },
    MuiFilledInput: {
      styleOverrides: {
        root: {
          backgroundColor: "red",
          // backgroundColor: theme.palette.grey[500_12],
          "&:hover": {
            backgroundColor: theme.palette.grey[500_16],
            // backgroundColor: "red",
          },
          "&.Mui-focused": {
            backgroundColor: theme.palette.action.focus,
            // backgroundColor: "blue",
          },
          "&.Mui-disabled": {
            backgroundColor: theme.palette.grey[500_16],
            // backgroundColor: "green",
          },
        },
        underline: {
          "&:before": {
            borderBottomColor: theme.palette.grey[500_16],
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        input: {
          paddingTop: theme.spacing(1.2),
          paddingBottom: theme.spacing(1.2),
        },
        root: {
          // backgroundColor: theme.palette.action.inputBackground,

          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "transparent",
            border: "0.5px solid #B4B4B4",
            borderRadius: "16px",
            "&.Mui-focused": {
              border: "none",
            },
            "&.MuiFormLabel-filled": {
              border: "none",
              fontSize: "100px",
            },
          },
          "&.Mui-disabled": {
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: theme.palette.action.disabledBackground,
            },
          },
          "&.Mui-filled": {
            "& .MuiOutlinedInput-notchedOutline": {
              border: "none",
            },
          },
        },
      },
    },
  };
}
