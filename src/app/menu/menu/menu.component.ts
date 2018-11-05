import { Component, OnInit } from '@angular/core';

import { Menu } from '../menu.class';
import { SystemService } from '../../system/system.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  name: string;

  menus: Menu[] = [
    new Menu("Home", "/home", "The Home Page"),
    new Menu("Users", "/users/list", "The user list"),
    new Menu("Vendors", "/vendors/list", "The vendor list"),
    new Menu("Products", "/products/list", "The products list"),
    new Menu("Requests", "/requests/list", "The purchase request list"),
    new Menu("About", "/about", "The about page"),
    new Menu("Login", "/users/login", "Login page")
  ];

  constructor(
    private sys: SystemService
  ) { }

  ngOnInit() {
    this.name = (this.sys.user != null) ? this.sys.user.Lastname : 'Not logged in';
  }

}
