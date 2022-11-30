import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupAndTeardownComponent } from './setup-and-teardown.component';

describe('SetupAndTeardownComponent', () => {
  let component: SetupAndTeardownComponent;
  let fixture: ComponentFixture<SetupAndTeardownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SetupAndTeardownComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetupAndTeardownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should increment total votes when upvoted', () => {
    //Act
    component.upVote();
    //Assert
    expect(component.totalVotes).toBe(1);
  });

  it('should deccrement total votes when upvoted', () => {
    //Act
    component.downVote();
    //Assert
    expect(component.totalVotes).toBe(-1); // this would be -1 not 0
    // because we have the beforeEach function
  });
});
