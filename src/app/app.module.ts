import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FundamentalsComponent } from './fundamentals/fundamentals.component';
import { StringArraysComponent } from './string-arrays/string-arrays.component';
import { SetupAndTeardownComponent } from './setup-and-teardown/setup-and-teardown.component';

@NgModule({
  declarations: [
    AppComponent,
    FundamentalsComponent,
    StringArraysComponent,
    SetupAndTeardownComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
