import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StringArraysComponent } from './string-arrays.component';

describe('StringArraysComponent', () => {
  let component: StringArraysComponent;
  let fixture: ComponentFixture<StringArraysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StringArraysComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StringArraysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
