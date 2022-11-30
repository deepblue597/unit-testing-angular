import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StringArraysComponent } from './string-arrays.component';

describe('StringArraysComponent', () => {
  let component: StringArraysComponent;
  let fixture: ComponentFixture<StringArraysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StringArraysComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StringArraysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should include the name in the message', () => {
    // expect(component.greet('jason')).toBe('Welcome jason');
    // this test is too specific
    expect(component.greet('jason')).toContain('jason'); //this is better because we are checking only for the name
  });

  it('should contain the currencies', () => {
    const result = component.getCurrencies();
    expect(result).toContain('USD');
    expect(result).toContain('EUR');
    expect(result).toContain('AUD');
  });
});
