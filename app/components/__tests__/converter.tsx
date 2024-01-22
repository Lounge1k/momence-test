import * as React from "react";
import { Converter } from "../converter";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

const mockData = {
  country: "mock",
  currency: "mock",
  amount: "1",
  code: "mock",
  rate: "10",
};

describe("Converter", () => {
  it("should render", () => {
    const { getByText } = render(<Converter data={[mockData]} />);
    expect(getByText(mockData.country)).toBeInTheDocument();
  });
  it("should show converted amount", () => {
    const value = 2;
    const { getByTestId } = render(<Converter data={[mockData]} />);
    fireEvent.change(getByTestId("select"), {
      target: { value: mockData.code },
    });
    expect(
      (getByTestId(`option-${mockData.code}`) as HTMLOptionElement).selected
    ).toBeTruthy();
    fireEvent.change(getByTestId("input"), { target: { value } });
    expect(getByTestId("converted")).toBeInTheDocument();
    expect(getByTestId("calculated-amount").innerHTML).toBe(
      ((value * parseInt(mockData.amount)) / parseFloat(mockData.rate)).toFixed(
        3
      )
    );
  });
});
