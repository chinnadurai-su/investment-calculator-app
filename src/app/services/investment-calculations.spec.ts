import { TestBed } from '@angular/core/testing';

import { InvestmentCalculations } from './investment-calculations';

describe('InvestmentCalculations', () => {
  let service: InvestmentCalculations;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InvestmentCalculations);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
