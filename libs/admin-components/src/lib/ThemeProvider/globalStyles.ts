import { useTheme } from "@mui/material/styles";
import { withStyles } from "@mui/styles";
// ----------------------------------------------------------------------

const GlobalStyles = withStyles(() => {
  const theme = useTheme();
  return {
    "@global": {
      "*": {
        margin: 0,
        padding: 0,
        boxSizing: "border-box",
      },
      html: {
        width: "100%",
        height: "100%",
        "-ms-text-size-adjust": "100%",
        "-webkit-overflow-scrolling": "touch",
      },
      "::-webkit-scrollbar": {
        width: "10px",
        backgroundColor: "transparent",
      },
      "::-webkit-scrollbar-track": {
        borderRadius: "10px",
        maxHeight: "124px",
      },
      "::-webkit-scrollbar-thumb": {
        background: theme.palette.secondary.dark,
        borderRadius: "10px",
      },
      body: {
        width: "100%",
        height: "100%",
      },
      "#root": {
        width: "100%",
        height: "100%",
      },
      input: {
        "&[type=number]": {
          MozAppearance: "textfield",
          "&::-webkit-outer-spin-button": {
            margin: 0,
            WebkitAppearance: "none",
          },
          "&::-webkit-inner-spin-button": {
            margin: 0,
            WebkitAppearance: "none",
          },
        },
      },
      textarea: {
        "&::-webkit-input-placeholder": { color: theme.palette.text.disabled },
        "&::-moz-placeholder": {
          opacity: 1,
          color: theme.palette.text.disabled,
        },
        "&:-ms-input-placeholder": { color: theme.palette.text.disabled },
        "&::placeholder": { color: theme.palette.text.disabled },
      },
      a: { color: theme.palette.primary.main },
      img: { display: "block", maxWidth: "100%" },

      // Lazy Load Img
      ".blur-up": {
        WebkitFilter: "blur(5px)",
        filter: "blur(5px)",
        transition: "filter 400ms, -webkit-filter 400ms",
      },
      ".blur-up.lazyloaded ": {
        WebkitFilter: "blur(0)",
        filter: "blur(0)",
      },
      mark: {
        color: theme.palette.primary.main,
        backgroundColor: "transparent",
      },
    },
  };
})(() => null);

export default GlobalStyles;
