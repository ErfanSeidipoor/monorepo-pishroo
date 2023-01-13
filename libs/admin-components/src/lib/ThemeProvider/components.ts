import { Components } from "@mui/material";
import { FONT_PRIMARY } from "./typography";

const components: Components = {
  MuiCssBaseline: {
    styleOverrides: `
      @font-face {
        font-family: ${FONT_PRIMARY};
        font-style: normal;
        font-display: swap;
        font-weight: 900;
        src: url("/fonts/eot/SFProText-Heavy.eot");
        src: local(${FONT_PRIMARY}Web_Black), url("/assets/fonts/SFProText-Heavy.ttf") format("truetype"),
            url("/fonts/eot/SFProText-Heavy.eot?#iefix") format("embedded-opentype"),
            url("/fonts/woff2/SFProText-Heavy.woff2") format("woff2"),
            url("/fonts/woff/SFProText-Heavy.woff") format("woff");
      }

      @font-face {
        font-family: ${FONT_PRIMARY};
        font-style: normal;
        font-display: swap;
        font-weight: bold;
        src: url("/fonts/eot/SFProText-Bold.eot");
        src: local(${FONT_PRIMARY}Web_Bold), url("/assets/fonts/SFProText-Bold.ttf") format("truetype"),
            url("/fonts/eot/SFProText-Bold.eot?#iefix") format("embedded-opentype"),
            url("/fonts/woff2/SFProText-Bold.woff2") format("woff2"),
            url("/fonts/woff/SFProText-Bold.woff") format("woff");
      }

      @font-face {
        font-family: ${FONT_PRIMARY};
        font-style: normal;
        font-display: swap;
        font-weight: 500;
        src: url("/fonts/eot/SFProText-SemiBold.eot");
        src: local(${FONT_PRIMARY}Web_Bold), url("/assets/fonts/SFProText-SemiBold.ttf") format("truetype"),
            url("/fonts/eot/SFProText-SemiBold.eot?#iefix") format("embedded-opentype"),
            url("/fonts/woff2/SFProText-SemiBold.woff2") format("woff2"),
            url("/fonts/woff/SFProText-SemiBold.woff") format("woff");
      }

      @font-face {
        font-family: ${FONT_PRIMARY};
        font-style: normal;
        font-display: swap;
        font-weight: normal;
        src: url("/fonts/eot/SFProText-Regular.eot");
        src: local(${FONT_PRIMARY}Web_Medium), url("/assets/fonts/SFProText-Regular.ttf") format("truetype"),
            url("/fonts/eot/SFProText-Regular.eot?#iefix") format("embedded-opentype"),
            url("/fonts/woff2/SFProText-Regular.woff2") format("woff2"),
            url("/fonts/woff/SFProText-Regular.woff") format("woff");
      }

      @font-face {
        font-family: ${FONT_PRIMARY};
        font-style: normal;
        font-display: swap;
        font-weight: 300;
        src: url("/fonts/eot/SFProText-Light.eot");
        src: local(${FONT_PRIMARY}Web_Light), url("/assets/fonts/SFProText-Light.ttf") format("truetype"),
            url("/fonts/eot/SFProText-Light.eot?#iefix") format("embedded-opentype"),
            url("/fonts/woff2/SFProText-Light.woff2") format("woff2"),
            url("/fonts/woff/SFProText-Light.woff") format("woff");
      }

      @font-face {
        font-family: ${FONT_PRIMARY};
        font-style: normal;
        font-display: swap;
        font-weight: 200;
        src: url("/fonts/eot/SFProText-Ultralight.eot");
        src: local(${FONT_PRIMARY}Web_Light), url("/assets/fonts/SFProText-Ultralight.ttf") format("truetype"),
            url("/fonts/eot/SFProText-Ultralight.eot?#iefix") format("embedded-opentype"),
            url("/fonts/woff2/SFProText-Ultralight.woff2") format("woff2"),
            url("/fonts/woff/SFProText-Ultralight.woff") format("woff");
      }
   
    `,
  },
};

export default components;
