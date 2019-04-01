import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../user/user.class'

@Injectable({
  providedIn: 'root'
})
export class SystemService {

  private _baseUrl = 'http://localhost:54401/';
  // private _baseUrl = 'http://purchase-request-server.azurewebsites.net';
  get ServerUrl() { return this._baseUrl; }

  private _user: User = null;
  get user() { return this._user; }
  set user(user: User) { this._user = user; }
  get isLoggedIn() { return this._user != null; }
  clear(): void {
    this.user = null;
  }
  checkForLogin() {
    if(!this.isLoggedIn) {
      console.warn("CheckForLogin()");
      this.router.navigateByUrl("/users/login");
    }
  }

  constructor(
    private router: Router
  ) { }
}
