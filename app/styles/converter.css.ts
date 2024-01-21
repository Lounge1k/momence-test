import { style } from "@vanilla-extract/css";
import * as globalStyles from "./global-style.css";

export const converter = style([
  globalStyles.container,
  {
    backgroundColor: "palegoldenrod",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px 25px",
    flexDirection: "column",
  },
]);

export const label = style({
  selectors: {
    [`${converter} &`]: {
      display: "flex",
      flexWrap: "nowrap",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: "10px",
    },
  },
});

export const formField = style({
  selectors: {
    [`${converter} &`]: {
      margin: "0 10px",
      backgroundColor: "transparent",
      border: "none",
      borderBottom: "1px solid palevioletred",
      fontWeight: "400",
    },
  },
});

export const dropdown = style([formField, globalStyles.fontNormal]);

export const input = style([formField, globalStyles.fontNormal]);

export const color = style({
  color: "palevioletred",
});
