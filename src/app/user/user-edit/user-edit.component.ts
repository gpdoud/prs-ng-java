import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { SystemService } from '../../system/system.service';
import { UserService } from '../user.service';
import { User } from '../user.class';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  user: User;
  
  save(): void {
    this.usersvc.change(this.user)
      .subscribe(resp => {
        console.log("resp:", resp);
        this.router.navigateByUrl('/users/list');
      });
  }

  constructor(
    private sys: SystemService,
    private usersvc: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.sys.checkForLogin();
    let id = this.route.snapshot.params.id;
    this.usersvc.get(id)
      .subscribe(resp => {
        console.log("resp:", resp);
        this.user = resp.Data;
      });
  }

}
