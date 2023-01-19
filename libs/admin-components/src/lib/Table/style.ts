import { CustomTheme } from "@pishroo/admin-components";
import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme: CustomTheme) => {
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
