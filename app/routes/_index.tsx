import type { MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { Converter } from "~/components/coverter";
import { getCurrency } from "~/server/getCurrency";
import * as styles from "~/styles/table.css";
import * as font from "~/styles/global-style.css";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export async function loader() {
  const result = await getCurrency();
  return result;
}

export default function Index() {
  const { columns, data } = useLoaderData<typeof loader>();
  return (
    <div style={{ display: "flex", flexWrap: "nowrap" }}>
      <table className={styles.table}>
        <thead>
          <tr>
            {columns.map((column) => (
              <th className={font.font} key={column}>
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((currency: Record<string, string>, index) => (
            <tr key={index}>
              {Object.keys(currency).map((field: string) => (
                <td key={currency[field]}>{currency[field]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <Converter data={data} />
    </div>
  );
}
