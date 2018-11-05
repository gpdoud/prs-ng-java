import { Component, OnInit } from '@angular/core';

import { SystemService } from '../../system/system.service';
import { UserService } from '../user.service';
import { User } from '../user.class';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  
  sortColumn: string = 'Lastname';
  sortOrder: string = 'desc';
  isAdmin: boolean = false;
  users: User[];
  colClasses = "btn btn-link font-weight-bold";

  sortBy(col: string) {
    if(this.sortColumn === col) {
      this.sortOrder = (this.sortOrder === 'asc') ? 'desc' : 'asc';
      console.log(`sortBy(${col}), order(${this.sortOrder})`);
    }
    this.sortColumn = col;
  }
  
  constructor(
    private sys: SystemService,
    private usersvc: UserService
    ) { 
    }
    
    ngOnInit() {
      this.sys.checkForLogin();
      this.usersvc.list()
      .subscribe(resp => {
        console.log("Users:", resp);
        this.users = resp.Data;
      });
    this.isAdmin = (this.sys.user != null) ? this.sys.user.IsAdmin : false;
  }

}
