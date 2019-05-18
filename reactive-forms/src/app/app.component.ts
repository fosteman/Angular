import { Component } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private formBuilder: FormBuilder) {
    this.createForm();
  } // DIP
  title = 'reactive-forms';
  exampleForm = new FormGroup({
    firstName: new FormControl(),
    lastName: new FormControl()
  });
  createForm() {
    this.exampleForm = this.formBuilder.group({
      firstName: 'field created',
      lastName: 'another empty field!'
    });
  }
}
