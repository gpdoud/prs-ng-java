import { Injectable } from '@angular/core';

import { User } from '../user/user.class'

@Injectable({
  providedIn: 'root'
})
export class SystemService {

  private _baseUrl = 'http://localhost:54401/';
  get ServerUrl() { return this._baseUrl; }

  private _user: User = null;
  get user() { return this._user; }
  set user(user: User) { this._user = user; }
  get isLoggedIn() { return this._user != null; }
  clear(): void {
    this.user = null;
  }

  constructor() { }
}
