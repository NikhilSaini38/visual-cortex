import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BackgroundComponent } from './background/background.component';
import { WrapperComponent } from './wrapper/wrapper.component';
import { HeadlineComponent } from './headline/headline.component';
import { FormComponent } from './form/form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { FormResultsComponent } from './form-results/form-results.component';
import { TaxResultsComponent } from './tax-results/tax-results.component';
import { TaxCalculatorService } from './tax-calculator.service';

@NgModule({
  declarations: [
    AppComponent,
    BackgroundComponent,
    WrapperComponent,
    HeadlineComponent,
    FormComponent,
    FormResultsComponent,
    TaxResultsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
  ],
  providers: [TaxCalculatorService],
  bootstrap: [AppComponent],
})
export class AppModule {}
