import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TaxCalculatorService {
  constructor() {}

  results: {
    country: string;
    finYear: number;
    amount: number;
    currency: string;
    taxResults: { lowerLimit: number; upperLimit: number; tax: number }[];
  } | null = null;

  calculate(country: string, fY: number, amount: number): boolean {
    if (this.taxBrackets[country]?.fYs[fY]) {
      let cntry = this.taxBrackets[country];
      let taxBrackets = cntry.fYs[fY];
      this.results = {
        country: country,
        finYear: fY,
        amount: amount,
        currency: cntry.currency,
        taxResults: taxBrackets.map((bracket) => {
          let tax = 0;
          if (amount > bracket.upperLimit)
            tax =
              (bracket.upperLimit - bracket.lowerLimit - 1) * bracket.taxRate;
          else if (amount > bracket.lowerLimit)
            tax = (amount - bracket.lowerLimit - 1) * bracket.taxRate;
          else tax = 0;
          return {
            lowerLimit: bracket.lowerLimit,
            upperLimit: bracket.upperLimit,
            tax: tax,
          };
        }),
      };
      return true;
    } else return true;
  }
  reset() {
    this.results = null;
  }
  readonly taxBrackets: {
    [country: string]: {
      currency: string;
      fYs: {
        [yearStarting: number]: {
          lowerLimit: number;
          upperLimit: number;
          taxRate: number;
        }[];
      };
    };
  } = {
    Australia: {
      currency: 'AUD',
      fYs: {
        '2019': [
          {
            lowerLimit: 0,
            upperLimit: 18200,
            taxRate: 0,
          },
          {
            lowerLimit: 18201,
            upperLimit: 37000,
            taxRate: 0.19,
          },
          {
            lowerLimit: 37001,
            upperLimit: 90000,
            taxRate: 0.325,
          },
          {
            lowerLimit: 90001,
            upperLimit: 180000,
            taxRate: 0.37,
          },
          {
            lowerLimit: 180001,
            upperLimit: Infinity,
            taxRate: 0.45,
          },
        ],
        '2020': [
          {
            lowerLimit: 0,
            upperLimit: 18200,
            taxRate: 0,
          },
          {
            lowerLimit: 18201,
            upperLimit: 45000,
            taxRate: 0.19,
          },
          {
            lowerLimit: 45001,
            upperLimit: 120000,
            taxRate: 0.325,
          },
          {
            lowerLimit: 120001,
            upperLimit: 180000,
            taxRate: 0.37,
          },
          {
            lowerLimit: 180001,
            upperLimit: Infinity,
            taxRate: 0.45,
          },
        ],
      },
    },
  };
}
