import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements  OnInit {
  title = 'ngForm component - practicum';
  constructor() {}
  ngOnInit() {}
  register(form: NgForm) {
    console.log(form);
  }
}
