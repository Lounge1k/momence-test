export interface ICurrency {
  country: string;
  currency: string;
  amount: string;
  code: string;
  rate: string;
}

export type IColumns = keyof ICurrency;
