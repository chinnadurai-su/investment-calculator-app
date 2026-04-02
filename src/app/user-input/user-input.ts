import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

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
  calculateInvestment() {
    console.log(
      this.initialInvestment,
      this.annualContribution,
      this.annualReturn,
      this.investmentDuration,
    );
  }
}
