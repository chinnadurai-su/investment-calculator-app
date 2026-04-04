import { InvestmentCalculations } from './../services/investment-calculations';
import { Component, inject, Input } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { InvestmentValues } from '../Models/investment-values.modal';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-investment-results',
  imports: [CurrencyPipe],
  templateUrl: './investment-results.html',
  styleUrl: './investment-results.css',
})
export class InvestmentResults {
  private investmentCalculationService = inject(InvestmentCalculations);
  results: InvestmentValues[] = [];
  subscriptions: Subscription[] = [];

  ngOnInit() {
    this.subscriptions.push(
      this.investmentCalculationService.investedResults$.subscribe((data: InvestmentValues[]) => {
        this.results = data;
      }),
    );
  }

  ngOnDestroy() {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }
}
