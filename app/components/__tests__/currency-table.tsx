import * as React from "react";
import { CurrencyTable } from "../currency-table";
import { render } from "@testing-library/react";

const mockData = {
  country: "mockCountry",
  currency: "mockCurrency",
  amount: "1",
  code: "mockCode",
  rate: "10",
};

const columns = Object.keys(mockData);

describe("Currency Table", () => {
  it("should render correctly", () => {
    const { getByText } = render(
      <CurrencyTable data={[mockData]} columns={columns} />
    );
    expect(getByText(mockData.country)).toBeInTheDocument();
    expect(getByText("country")).toBeInTheDocument();
  });
});
