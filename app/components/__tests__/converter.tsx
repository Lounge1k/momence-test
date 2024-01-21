import * as React from "react";
import { Converter } from "../converter";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

const mockData = {
  country: "mock",
  currency: "mock",
  amount: "1",
  code: "mock",
  rate: "1",
};

describe("Converter", () => {
  it("should work", () => {
    const { container, getByText } = render(<Converter data={[mockData]} />);
    expect(getByText("mock")).toBeInTheDocument();
  });
});
