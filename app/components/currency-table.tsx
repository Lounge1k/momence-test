import { ICurrency } from "~/interfaces";

import * as styles from "../styles/table.css";
type CurrencyTableProps = {
  columns: string[];
  data: ICurrency[];
};

export const CurrencyTable = ({ columns, data }: CurrencyTableProps) => {
  return (
    <table className={styles.table}>
      <thead>
        <tr className={styles.tableHeadingRow}>
          {columns.map((column) => (
            <th className={styles.tableHeading} key={column}>
              {column}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((currency: ICurrency) => (
          <tr className={styles.tableRow} key={currency.code}>
            {Object.entries(currency).map(([key, value]) => (
              <td className={styles.tableCell} key={`${key}`}>
                {value}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
