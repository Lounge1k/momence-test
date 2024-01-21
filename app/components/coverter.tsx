import { useState, useMemo, useCallback } from "react";
import { ICurrency } from "~/interfaces";

import * as styles from "~/styles/converter.css";
type CoverterProps = {
  data: ICurrency[];
};

export const Converter = ({ data }: CoverterProps) => {
  const [selectedCurrency, setSelectedCurrency] = useState<ICurrency>();
  const [amount, setAmount] = useState<number>();

  const selectCurrency = (e) => {
    const selected = data.find((curr) => curr.code === e.target.value);
    setSelectedCurrency(selected);
  };

  const handlerAmount = (e) => {
    setAmount(e.target.value);
  };

  return (
    <div className={styles.converter}>
      <form>
        <label className={styles.label} htmlFor="amount">
          Convert
          <input
            className={styles.input}
            onChange={handlerAmount}
            type="number"
            id="amount"
          />
          czk
        </label>
        <label className={styles.label} id="currency">
          to
          <select
            className={styles.dropdown}
            id="currency"
            onChange={selectCurrency}
          >
            <option value="" disabled selected>
              Select currency
            </option>
            {data.map(({ code }: ICurrency) => (
              <option key={code} value={code}>
                {code}
              </option>
            ))}
          </select>
        </label>
      </form>
      {amount && selectedCurrency && (
        <div>
          For <span className={styles.color}>{amount}</span> czk you will get{" "}
          <span className={styles.color}>
            {(
              (amount * parseInt(selectedCurrency.amount)) /
              parseFloat(selectedCurrency.rate)
            ).toFixed(3)}{" "}
          </span>
          {selectedCurrency.currency}
        </div>
      )}
    </div>
  );
};
