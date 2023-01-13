// ----------------------------------------------------------------------

import { TypographyOptions } from "@mui/material/styles/createTypography";

function pxToRem(value: any) {
  return `${value / 16}rem`;
}

function responsiveFontSizes(props: any) {
  const { sm, md, lg } = props;
  return {
    "@media (max-width:1200px)": {
      fontSize: pxToRem(lg),
    },
    "@media (max-width:900px)": {
      fontSize: pxToRem(md),
    },
    "@media (max-width:600px)": {
      fontSize: pxToRem(sm),
    },
  };
}

export const FONT_PRIMARY = "Roboto"; // Google Font
// const FONT_SECONDARY = 'CircularStd, sans-serif'; // Local Font

const typography: TypographyOptions = {
  fontFamily: FONT_PRIMARY,
  fontWeightRegular: 400,
  fontWeightMedium: 600,
  fontWeightBold: 700,
  h1: {
    fontWeight: 700,
    lineHeight: 2,
    fontSize: pxToRem(34),
    // ...responsiveFontSizes({ sm: 30, md: 32, lg: 34 }),
  },
  h2: {
    fontWeight: 700,
    lineHeight: 2,
    fontSize: pxToRem(28),
    ...responsiveFontSizes({ sm: 12, md: 22, lg: 28 }),
  },
  h3: {
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: pxToRem(22),
    ...responsiveFontSizes({ sm: 15, md: 18, lg: 22 }),
  },
  h4: {
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: pxToRem(20),
    // ...responsiveFontSizes({ sm: 16, md: 18, lg: 20 }),
  },
  h5: {
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: pxToRem(17),
  },
  h6: {
    fontWeight: 400,
    lineHeight: 1.5,
    fontSize: pxToRem(17),
    ...responsiveFontSizes({ sm: 10, md: 12 }),
  },
  subtitle1: {
    fontWeight: 400,
    lineHeight: 1.5, //
    fontSize: pxToRem(16),
  },
  subtitle2: {
    fontWeight: 400,
    lineHeight: 1,
    fontSize: pxToRem(15),
  },
  body1: {
    fontWeight: 400,
    lineHeight: 1.5, //
    fontSize: pxToRem(13),
  },
  body2: {
    fontWeight: 400,
    lineHeight: 1,
    fontSize: pxToRem(12),
  },
  caption: {
    fontWeight: 400,
    lineHeight: 1,
    fontSize: pxToRem(11),
  },
};

export default typography;
