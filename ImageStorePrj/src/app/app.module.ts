// This is root module
import { BrowserModule } from '@angular/platform-browser'; // feature module
import { NgModule } from '@angular/core';
import { StoreComponent } from "./store/store.component";
import { CheckoutComponent } from "./store/checkout.component";
import { CartDetailComponent } from "./store/cartDetail.component";
import { RouterModule } from "@angular/router";
import { AppComponent } from './app.component';
import { StoreModule } from './store/store.module';

@NgModule({
  imports: [BrowserModule, StoreModule,
    RouterModule.forRoot([
      { path: "store", component: StoreComponent },
      { path: "cart", component: CartDetailComponent },
      { path: "checkout", component: CheckoutComponent },
      { path: "**", redirectTo: "/store" }
    ])],
  declarations: [
    AppComponent // load this  component
  ],
  bootstrap: [AppComponent] // root component is
})
export class AppModule { }
