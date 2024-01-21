import { style } from "@vanilla-extract/css";
import * as globalStyles from "./global-style.css";

export const wrapper = style({
  display: "flex",
  flexWrap: "wrap",
  height: "100%",
});

export const container = style({
  flex: "1 0 50%",
  padding: "15px 10px",
});

export const table = style([
  container,
  {
    backgroundColor: "palevioletred",
    textAlign: "left",
    minWidth: "320px",
    borderCollapse: "collapse",
  },
]);

export const tableRow = style({
  selectors: {
    [`${table} &`]: {
      borderBottom: "1px solid palegoldenrod",
    },
  },
});

export const tableHeading = style([
  globalStyles.font,
  {
    selectors: {
      [`${table} &`]: {
        padding: "0 5px",
      },
    },
  },
]);

export const tableCell = style({
  selectors: {
    [`${table} &`]: {
      padding: "5px",
    },
  },
});

export const converter = style([
  container,
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
      display: "block",
    },
  },
});

export const formField = style({
  selectors: {
    [`${converter} &`]: {
      marginLeft: "10px",
      backgroundColor: "transparent",
      border: "none",
      borderBottom: "1px solid palevioletred",
      fontWeight: "400",
    },
  },
});

export const dropdown = style([formField, globalStyles.font]);

export const input = style([formField, globalStyles.font]);

export const color = style({
  color: "palevioletred",
});
