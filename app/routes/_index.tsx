import type { MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { Converter } from "~/components/converter";
import { getCurrency } from "~/server/get-currency";
import { CurrencyTable } from "~/components/currency-table";
import * as styles from "~/styles/global-style.css";

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
    <div className={styles.wrapper}>
      <Converter data={data} />
      <CurrencyTable columns={columns} data={data} />
    </div>
  );
}
