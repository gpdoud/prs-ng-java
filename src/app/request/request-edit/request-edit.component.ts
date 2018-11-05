import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { SystemService } from '../../system/system.service';
import { RequestService } from '../request.service';
import { Request } from '../request.class';
import { UserService } from '../../user/user.service';
import { User } from '../../user/user.class';

@Component({
  selector: 'app-request-edit',
  templateUrl: './request-edit.component.html',
  styleUrls: ['./request-edit.component.css']
})
export class RequestEditComponent implements OnInit {

  request: Request;
  users: User[];
  
  save(): void {
    this.requestsvc.change(this.request)
      .subscribe(resp => {
        console.log("resp:", resp);
        this.router.navigateByUrl('/requests/list');
      });
  }

  constructor(
    private sys: SystemService,
    private requestsvc: RequestService,
    private usersvc: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.sys.checkForLogin();
    let id = this.route.snapshot.params.id;
    this.requestsvc.get(id)
      .subscribe(resp => {
        console.log("resp:", resp);
        this.request = resp.Data;
      });

    this.usersvc.list()
      .subscribe(resp => {
        console.log("Resp:", resp);
        this.users = resp.Data;
      });
  }

}
