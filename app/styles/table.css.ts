import { style } from "@vanilla-extract/css";
import * as globalStyles from "./global-style.css";

export const table = style([
  globalStyles.container,
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

export const tableHeadingRow = style({
  backgroundColor: "palevioletred",
  position: "sticky",
  top: 0,
});

export const tableHeading = style([
  globalStyles.fontBold,
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
