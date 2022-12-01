import { computeDecimalDigest } from '@angular/compiler/src/i18n/digest';
import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';

import { FundamentalsComponent } from './fundamentals.component';

fdescribe('FundamentalsComponent', () => {
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
    //const de = fixture.debugElement; //dont know if this works will see
  });

  it('should return 0 if input < 0', () => {
    const result = component.compute(-1); // we call the function
    expect(result).toBe(0); //we test its value
  });
  it('should increment if input > 0', () => {
    const result = component.compute(1); // we call the function
    expect(result).toBe(2); //we test its value
  });

  //this is from fireship video
  it('should contain the warning', () => {
    expect(component.severity).toContain('warn');
  });

  it('should have a p tag of alert button', () => {
    expect(
      fixture.debugElement.query(By.css('p')).nativeElement.innerText
    ).toBe('Warning code ' + component.severity);
  }); // this basecly checks if the html p component has the upper sentence

  it('should toggle the warning', () => {
    expect(component.hideContent).toBeTruthy();
    component.toggle();
    expect(component.hideContent).toBeFalsy();
  });

  it('should toggle the warning async', fakeAsync(() => {
    expect(component.hideContent).toBeTruthy();
    component.toggleAsync();
    tick(500); // waits 500 to check if it has changed
    expect(component.hideContent).toBeFalsy();
  }));

  // serviceSub = {
  //   getContent : () => of('You have been warned')
  // } //this i dont understand
});
