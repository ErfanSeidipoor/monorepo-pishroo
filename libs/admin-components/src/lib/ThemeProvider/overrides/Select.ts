import ExpandMoreOutlined from "@mui/icons-material/ExpandMoreOutlined";

// ----------------------------------------------------------------------

export default function Select() {
  return {
    MuiSelect: {
      defaultProps: {
        IconComponent: ExpandMoreOutlined,
      },

      styleOverrides: {
        root: {},
      },
    },
  };
}
