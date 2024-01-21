import { globalFontFace, globalStyle, style } from "@vanilla-extract/css";

const contentFont = "Roboto";

globalFontFace(contentFont, {
  fontWeight: 400,
  src: "url('https://fonts.gstatic.com/s/robotomono/v23/L0xuDF4xlVMF-BfR8bXMIhJHg45mwgGEFl0_3vq_ROW4AJi8SJQt.woff2') format('woff2')",
});

globalFontFace(contentFont, {
  fontWeight: 600,
  src: "url('https://fonts.gstatic.com/s/robotomono/v23/L0xTDF4xlVMF-BfR8bXMIhJHg45mwgGEFl0_3vrtSM1J-gEPT5Ese6hmHSh0me8iUI0.woff2') format('woff2');",
});

globalStyle("*", {
  boxSizing: "border-box",
});

globalStyle("html, body", {
  fontFamily: contentFont,
  margin: 0,
  width: "100%",
  height: "100%",
  fontSize: "3vw",
  minWidth: "320px",
  "@media": {
    "screen and (min-width: 788px)": {
      fontSize: "16px",
    },
  },
});

export const fontBold = style({
  fontFamily: contentFont,
  fontWeight: 600,
});

export const fontNormal = style({
  fontFamily: contentFont,
  fontWeight: 400,
  fontSize: "3vw",
  "@media": {
    "screen and (min-width: 788px)": {
      fontSize: "16px",
    },
  },
});

export const wrapper = style({
  display: "flex",
  flexWrap: "wrap",
  height: "100%",
});

export const container = style({
  flex: "1 0 50%",
  padding: "15px 10px",
});
