import { useState } from "react";

export const Converter = ({ data }: any) => {
  const [currency, setCurrency] = useState<number>();
  const [amount, setAmount] = useState<number>();

  const selectCurrency = (e) => {
    console.log(e.target.value);
    setCurrency(e.target.value);
  };

  const handlerAmount = (e) => {
    setAmount(e.target.value);
  };

  return (
    <div style={{ flex: "0 0 50%", backgroundColor: "palegoldenrod" }}>
      <form>
        <label htmlFor="amount">Amount</label>
        <input onChange={handlerAmount} type="number" id="amount" />
        <label id="currency">Currency</label>
        <select id="currency" onChange={selectCurrency}>
          <option value="" disabled selected>
            Select your option
          </option>
          {data.map(({ rate, currency }: any) => (
            <option value={rate}>{currency}</option>
          ))}
        </select>
      </form>
      {currency && amount && <div>You will get {amount * currency}</div>}
    </div>
  );
};
