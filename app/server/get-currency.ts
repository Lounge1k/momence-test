import { getCurrencyController } from "./get-currency-controller";

export const getCurrency = async () => {
  // TODO: implement error catch
  const res = await fetch(
    "https://www.cnb.cz/en/financial-markets/foreign-exchange-market/central-bank-exchange-rate-fixing/central-bank-exchange-rate-fixing/daily.txt"
  );
  const text = await res.text();
  const { date, columns, data } = getCurrencyController(text);
  return {
    date,
    columns,
    data,
  };
};
