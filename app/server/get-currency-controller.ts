import { ICurrency, IColumns } from "~/interfaces";

export const getCurrencyController = (text: string) => {
  const lines = text.trim().split("\n");
  const date = lines[0];
  const columns = lines[1].split("|") as IColumns[];
  const data = lines.slice(2).map((currency: string) => {
    return currency.split("|").reduce((result, item, index) => {
      return {
        ...result,
        [columns[index].toLowerCase()]: item,
      };
    }, {} as ICurrency);
  });
  return {
    date,
    columns,
    data,
  };
};
