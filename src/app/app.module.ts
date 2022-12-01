import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FundamentalsComponent } from './fundamentals/fundamentals.component';
import { StringArraysComponent } from './string-arrays/string-arrays.component';
import { SetupAndTeardownComponent } from './setup-and-teardown/setup-and-teardown.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    FundamentalsComponent,
    StringArraysComponent,
    SetupAndTeardownComponent,
    HeroesComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
