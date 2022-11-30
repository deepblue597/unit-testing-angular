import { computeDecimalDigest } from '@angular/compiler/src/i18n/digest';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FundamentalsComponent } from './fundamentals.component';

describe('FundamentalsComponent', () => {
  let component: FundamentalsComponent;
  let fixture: ComponentFixture<FundamentalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FundamentalsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FundamentalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should return 0 if input < 0', () => {
    const comp = new FundamentalsComponent(); // we need to create tha component
    const result = comp.compute(-1); // we call the function
    expect(result).toBe(0); //we test its value
  });
  it('should increment if input > 0', () => {
    const comp = new FundamentalsComponent(); // we need to create tha component
    const result = comp.compute(1); // we call the function
    expect(result).toBe(2); //we test its value
  });
});
