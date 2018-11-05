import { Component, OnInit } from '@angular/core';

import { SystemService } from '../../system/system.service';
import { VendorService } from '../vendor.service';
import { Vendor } from '../vendor.class';
@Component({
  selector: 'app-vendor-list',
  templateUrl: './vendor-list.component.html',
  styleUrls: ['./vendor-list.component.css']
})
export class VendorListComponent implements OnInit {

  isAdmin: boolean;
  vendors: Vendor[];

  constructor(
    private vendorsvc: VendorService,
    private sys: SystemService
  ) { }

  ngOnInit() {
    this.sys.checkForLogin();
    this.vendorsvc.list()
      .subscribe(resp => {
        console.log("Vendors:", resp);
        this.vendors = resp.Data;
      });
    this.isAdmin = (this.sys.user != null) ? this.sys.user.IsAdmin : false;
  }

}
