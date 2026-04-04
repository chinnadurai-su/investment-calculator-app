import { Injectable } from '@angular/core';
import { UserInputData } from '../Models/user-input.modal';
import { Subject } from 'rxjs';
import { InvestmentValues } from '../Models/investment-values.modal';

@Injectable({
  providedIn: 'root',
})
export class InvestmentCalculations {
  private investedResults = new Subject<InvestmentValues[]>();
  investedResults$ = this.investedResults.asObservable();
  calculateInvestmentResults(data: UserInputData) {
    const { initialInvestment, annualInvestment, expectedReturn, duration } = data;
    const annualData = [];
    let investmentValue = initialInvestment;

    for (let i = 0; i < duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (expectedReturn / 100);
      investmentValue += interestEarnedInYear + annualInvestment;
      const totalInterest = investmentValue - annualInvestment * year - initialInvestment;
      annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested: initialInvestment + annualInvestment * year,
      });
    }
    this.investedResults.next(annualData);
  }
}
