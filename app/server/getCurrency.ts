export const getCurrency = async () => {
  const res = await fetch(
    "https://www.cnb.cz/en/financial-markets/foreign-exchange-market/central-bank-exchange-rate-fixing/central-bank-exchange-rate-fixing/daily.txt"
  );
  const text = await res.text();
  const lines = text.trim().split("\n");
  const date = lines[0];
  const columns = lines[1].split("|");
  const data = lines.slice(2).map((currency) => {
    return currency.split("|");
  });
  console.log(data);
  return {
    date,
    columns,
    data,
  };
};
