import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { ModelModule } from "../model/model.module";
import { StoreComponent } from "./store.component";
import { CartSummaryComponent } from "./cartSummary.component";

@NgModule({ // Feature module for the store functionality
  imports: [ModelModule, BrowserModule, FormsModule],
  declarations: [StoreComponent, CartSummaryComponent],
  exports: [StoreComponent]
})
export class StoreModule { }
