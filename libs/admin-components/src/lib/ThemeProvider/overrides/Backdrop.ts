export default function Backdrop(theme: any) {
  return {
    MuiBackdrop: {
      styleOverrides: {
        root: {
          "&.MuiBackdrop-invisible": {
            background: "transparent",
          },
        },
      },
    },
  };
}
