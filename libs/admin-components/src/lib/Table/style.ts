import { Theme } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme: Theme) => {
  return {
    loadingContainer: {
      display: "flex",
      flexDirection: "column",
      gap: 40,
    },
    loading: {
      height: "30px !important",
      opacity: 0.1,
    },
    leftAlign: {
      textAlign: "left",
      "& *": {
        textAlign: "left",
      },
    },
    rightAlign: {
      textAlign: "right",
      "& *": {
        textAlign: "right",
      },
    },
  };
});
