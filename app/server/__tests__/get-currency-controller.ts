import { getCurrencyController } from "../get-currency-controller";

describe("Get currency controller", () => {
  it("should work", () => {
    const mockedText = `22 Jan 2024 #15
Country|Currency|Amount|Code|Rate
Australia|dollar|1|AUD|14.995`;
    const { date, columns, data } = getCurrencyController(mockedText);
    expect(date).toBe("22 Jan 2024 #15");
    expect(columns).toEqual(["Country", "Currency", "Amount", "Code", "Rate"]);
    expect(data.length).toBe(1);
    expect(data[0].amount).toBe("1");
    expect(data[0].country).toBe("Australia");
  });
});
