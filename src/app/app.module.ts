import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FundamentalsComponent } from './fundamentals/fundamentals.component';
import { StringArraysComponent } from './string-arrays/string-arrays.component';

@NgModule({
  declarations: [
    AppComponent,
    FundamentalsComponent,
    StringArraysComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
