import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HeroesComponent } from './heroes.component';

/* be adding the f in the start of the describe method it will be the only test that it will run  */
fdescribe('HeroesComponent', () => {
  let component: HeroesComponent;
  let fixture: ComponentFixture<HeroesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeroesComponent],
      imports: [HttpClientTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

/* In the video it tuns through the error nullInjectoError
dynamic test moduel heroservice -> httpClient 
this is similar to our case  

what does it says : 
when it treis to geenrate the componenet it cant find the other componenets it needs
this is because angular has the component decoret in .ts 
the component decorator is special because it shows angular will take responsibility for 
the constructor to add other things all for the cosntructor
in our test we never run the constructor 
we let angualr do that. 
when we ask it for a component we say to angular to bring the service 
but the problem is angular doesnt know the service , but why ? 
the answer is the httpclient is the problem. 
what is the problem there? 
we are telling the dependency that is up to you to bring me the service that i need 
so it will create the hero service (angular will) 
becasue service has the injectable angular can do that. 
the service can be injected to something else 
it also says provided in ... 
it creates one service 
it is trying to create the hero service but it can create it because it needs the httpCLient service 
the messageservice it is not a problem so it is createde automaticaly 
but the httpclient service comes from angular itself and angular doesnt make their services provided in root so it ca be smaller.you need to add servies 
so where do we add it  

*/

/* if we use the httpClientModule it will try to make the http call 
because we are using the real httpClint 
we need a special one which is for testing 
which it the httpClientTestingModule  */
