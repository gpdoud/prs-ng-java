import { Component, OnInit } from '@angular/core';

import { Menu } from '../menu.class';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menus: Menu[] = [
    new Menu("Home", "/home", "The Home Page"),
    new Menu("Users", "/users/list", "The user list"),
    new Menu("About", "/about", "The about page")
  ];

  constructor() { }

  ngOnInit() {
  }

}
