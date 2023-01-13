import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme: Theme) => {
  return {
    root: {},
    tableContainer: {
      // padding: theme.spacing(1, 2),
      // backgroundColor: theme.palette.common.white + "!important",
    },
    table: {
      // borderSpacing: theme.spacing(0, 2) + "!important",
      borderCollapse: "separate",
    },
    tableHeader: {
      // padding: theme.spacing(1, 0) + "!important",
    },
    tableRow: {
      // backgroundColor: theme.palette.common.white + "!important",
      // padding: theme.spacing(1, 0),
      borderRadius: "10px",
    },
    loadingContainer: {
      display: "flex",
      flexDirection: "column",
      gap: 40,
    },
    loading: {
      height: "30px !important",
      opacity: 0.1,
    },
  };
});
