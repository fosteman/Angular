import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { AppComponent } from './app.component';

const  routes: Routes  = [
  {path: 'auth', loadChildren: './auth/auth.module#AuthModule'}
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
