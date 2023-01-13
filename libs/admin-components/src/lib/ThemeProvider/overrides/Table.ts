// ----------------------------------------------------------------------

export default function Table(theme: any) {
  return {
    MuiTableRow: {
      styleOverrides: {
        root: {
          backgroundColor: theme.palette.common.white,
          "&.Mui-selected": {
            backgroundColor: theme.palette.action.selected,
            "&:hover": {
              backgroundColor: theme.palette.action.hover,
            },
          },
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          // borderBottom: 'none'
          // textAlign: "center",
          // padding: theme.spacing(1.2),
          fontSize: "15px",
          fontWeight: 400,
        },
        head: {
          color: theme.palette.grey[500],
          fontSize: "17px",
          fontWeight: 500,
          borderBottom: "1.5px solid" + theme.palette.grey[50],
          // backgroundColor: theme.palette.background.neutral,
          "&:first-of-type": {
            // paddingLeft: theme.spacing(3),
            // borderTopLeftRadius: theme.shape.borderRadius,
            // borderBottomLeftRadius: theme.shape.borderRadius,
            // boxShadow: `inset 8px 0 0 ${theme.palette.background.paper}`,
          },
          "&:last-of-type": {
            // paddingRight: theme.spacing(3),
            // borderTopRightRadius: theme.shape.borderRadius,
            // borderBottomRightRadius: theme.shape.borderRadius,
            // boxShadow: `inset -8px 0 0 ${theme.palette.background.paper}`,
          },
        },
        stickyHeader: {
          // backgroundColor: theme.palette.background.paper,
          // backgroundImage: `linear-gradient(to bottom, ${theme.palette.background.neutral} 0%, ${theme.palette.background.neutral} 100%)`,
        },
        body: {
          backgroundColor: theme.palette.common.white,

          "&:first-of-type": {
            // paddingLeft: theme.spacing(1),
          },
          "&:last-of-type": {
            // paddingRight: theme.spacing(1),
          },
        },
      },
    },
    MuiTablePagination: {
      styleOverrides: {
        root: {
          // borderTop: `solid 1px ${theme.palette.divider}`,
        },
        toolbar: {
          // height: 64,
        },
        select: {
          "&:focus": {
            // borderRadius: theme.shape.borderRadius,
          },
        },
        selectIcon: {
          // width: 20,
          // height: 20,
          // marginTop: 2,
        },
      },
    },
  };
}
