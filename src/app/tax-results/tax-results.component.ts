import { Component, OnInit } from '@angular/core';
import { TaxCalculatorService } from '@app/tax-calculator.service';

@Component({
  selector: 'app-tax-results',
  templateUrl: './tax-results.component.html',
  styleUrls: ['./tax-results.component.scss'],
})
export class TaxResultsComponent implements OnInit {
  results;
  constructor(private taxCalc: TaxCalculatorService) {
    this.results = taxCalc.results;
  }
  net(): number {
    if (this.results)
      return this.results?.taxResults.reduce(
        (acc, result) => acc + result.tax,
        0
      );
    else return 0;
  }
  ngOnInit(): void {}
}
