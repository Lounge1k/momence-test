import type { MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getCurrency } from "~/server/getCurrency";

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
    <table>
      <thead>
        <tr>
          {columns.map((column) => (
            <th key={column}>{column}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((currency, index) => (
          <tr key={index}>
            {currency.map((field) => (
              <td key={field}>{field}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
