import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TaxCalculatorService } from '../tax-calculator.service';

@Component({
  selector: 'app-form-results',
  templateUrl: './form-results.component.html',
  styleUrls: ['./form-results.component.scss']
})
export class FormResultsComponent implements OnInit {
  @Output() formReset: EventEmitter<boolean> = new EventEmitter();
  results;
  constructor(private taxCalc: TaxCalculatorService) {
    this.results = taxCalc.results;
  }
  reset() {
    this.taxCalc.reset();
    this.formReset.emit(true);
  }
  ngOnInit(): void {}
}
