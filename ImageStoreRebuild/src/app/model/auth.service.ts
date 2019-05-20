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
    return this.dataSrc.authToken != null;
}
clear() {
    this.dataSrc.authToken = null;
}
}
