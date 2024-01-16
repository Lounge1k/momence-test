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

globalStyle("html, body", {
  fontFamily: contentFont,
  margin: 0,
  display: "flex",
  width: "100%",
});

export const font = style({
  fontFamily: contentFont,
  fontWeight: 600,
});
