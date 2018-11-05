import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SystemService } from '../../system/system.service';
import { UserService } from '../user.service';
import { User } from '../user.class';
import { JsonResponse } from '../../util/json-reponse.class';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  user: User = new User();
  msg: string = '';

  login(): void {
    this.syssvc.clear();
    this.usersvc.login(this.user.Username, this.user.Password)
      .subscribe(resp => {
        this.msg = '';
        console.log("Login Resp:", resp);
        if(resp.Code == 0) {
          this.syssvc.user = resp.Data;
          this.router.navigateByUrl('/home');
        }
        this.msg = resp.Message;
      });
  }

  constructor(
    private syssvc: SystemService,
    private usersvc: UserService,
    private router: Router
  ) { }

  ngOnInit() {
    this.user.Username = 'sa';
    this.user.Password = 'sa';
  }

}
