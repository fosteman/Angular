// This is root module
import { BrowserModule } from '@angular/platform-browser'; // feature module
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent // load this  component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent] // root component is
})
export class AppModule { }
