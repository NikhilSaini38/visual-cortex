import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TaxCalculatorService } from '../tax-calculator.service';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  @Output() formSubmitted: EventEmitter<boolean> = new EventEmitter();

  form = {
    country: '',
    finYear: '',
    amount: '',
  };

  constructor(private taxCalc: TaxCalculatorService) {}
  ngOnInit() {}

  populateCountries(): string[] {
    return Object.keys(this.taxCalc.taxBrackets);
  }
  populateFYs(): number[] | null {
    if (this.form.country && this.taxCalc.taxBrackets[this.form.country]) {
      let fYs = this.taxCalc.taxBrackets[this.form.country].fYs;
      return Object.keys(fYs).map((str) => parseInt(str));
    } else return null;
  }
  onSubmit(): void {
    if (this.form.amount && this.form.country && this.form.finYear)
      this.taxCalc.calculate(
        this.form.country,
        parseInt(this.form.finYear),
        parseInt(this.form.amount)
      );
    this.formSubmitted.emit(true);
  }
}
