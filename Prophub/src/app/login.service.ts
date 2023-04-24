import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as mysql from 'mysql';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  userid = 0;
  user: any;

  setId(id: any) {
    this.userid = id;
  }

  getId() {
    return this.userid;
  }

  setUser(user: any) {
    this.user = user;
  }
  getUser() {
    return this.user;
  }
}
