import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RestDataSource } from './rest.datasource';

@Injectable()
export class AuthService {
  constructor(private dataSrc: RestDataSource) {}
  authenticate(username: string, password: string): Observable<boolean> {
    return this.dataSrc.authenticate(username, password);
}
get authenticated(): boolean {
    return this.dataSrc.auth_token != null;
}
clear() {
    this.dataSrc.auth_token = null;
}
}
