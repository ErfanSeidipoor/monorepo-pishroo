// ----------------------------------------------------------------------

export default function Breadcrumbs(theme: any) {
  return {
    MuiBreadcrumbs: {
      styleOverrides: {
        separator: {
          marginLeft: theme.spacing(2),
          marginRight: theme.spacing(2),
        },
      },
    },
  };
}
