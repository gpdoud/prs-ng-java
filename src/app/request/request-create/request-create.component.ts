import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { RequestService } from '../request.service';
import { Request } from '../request.class';
import { UserService } from '../../user/user.service';
import { User } from '../../user/user.class'

@Component({
  selector: 'app-request-create',
  templateUrl: './request-create.component.html',
  styleUrls: ['./request-create.component.css']
})
export class RequestCreateComponent implements OnInit {

  request: Request = new Request();
  users: User[];

  save(): void {
    this.requestsvc.create(this.request)
      .subscribe(resp => {
        console.log("resp:", resp);
        this.router.navigateByUrl('/requests/list');
      });
  }
  
  constructor(
    private requestsvc: RequestService,
    private usersvc: UserService,
    private router: Router
  ) { }

  ngOnInit() {
    this.usersvc.list()
      .subscribe(resp => {
        console.log("Users:", resp);
        this.users = resp.Data;
        /*
        ** Force a user into the request until login
        */
       console.warn("User forced into request");
       this.request.UserId = this.users[0].Id;
      });
  }

}
