import { InvestmentCalculations } from './../services/investment-calculations';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserInputData } from '../Models/user-input.modal';

@Component({
  selector: 'app-user-input',
  imports: [FormsModule],
  templateUrl: './user-input.html',
  styleUrl: './user-input.css',
})
export class UserInput {
  initialInvestment: Number = 0;
  annualContribution: Number = 0;
  annualReturn: Number = 5;
  investmentDuration: Number = 10;
  private InvestmentCalculations = inject(InvestmentCalculations);
  calculateInvestment() {
    const data: UserInputData = {
      initialInvestment: Number(this.initialInvestment),
      annualInvestment: Number(this.annualContribution),
      expectedReturn: Number(this.annualReturn),
      duration: Number(this.investmentDuration),
    };
    this.InvestmentCalculations.calculateInvestmentResults(data);
    this.resetValues();
  }

  resetValues() {
    this.initialInvestment = 0;
    this.annualContribution = 0;
    this.annualReturn = 5;
    this.investmentDuration = 10;
  }
}
