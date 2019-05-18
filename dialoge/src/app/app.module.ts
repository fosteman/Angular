import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material';

import { AppComponent } from './app.component';
import { DialogBodyComponent } from './dialog-body/dialog-body';

@NgModule({
  declarations: [AppComponent, DialogBodyComponent],
  imports: [BrowserModule, MatDialogModule],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [DialogBodyComponent]
})
export class AppModule {}
