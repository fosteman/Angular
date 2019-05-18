import { Component, Inject } from '@angular/core';
import {
  MatDialog,
  MatDialogConfig
} from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Example Angular Material Dialog';

  constructor(private dialog: MatDialog) {}
  openDialog() {
    const dialogConfig = new MatDialogConfig();
    this.dialog.open(DialogBodyComponent, dialogConfig);
  }
}
