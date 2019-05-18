import { Injectable } from '@angular/core';
import {User} from './user';

@Injectable({
  providedIn: 'root'
})
export class AuthService { // v2 is to be built

  constructor() { }
  public login(userInfo: User) {
    localStorage.setItem('key', 'secret');
  }
  public isLoggedIn() {
    return 'secret' === localStorage.getItem('key');
  }
  public logout() {
    localStorage.removeItem('key');
  }
}
