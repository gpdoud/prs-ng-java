import { Component, OnInit } from '@angular/core';

import { VendorService } from '../vendor.service';
import { Vendor } from '../vendor.class';
@Component({
  selector: 'app-vendor-list',
  templateUrl: './vendor-list.component.html',
  styleUrls: ['./vendor-list.component.css']
})
export class VendorListComponent implements OnInit {

  vendors: Vendor[];

  constructor(private vendorsvc: VendorService) { }

  ngOnInit() {
    this.vendorsvc.list()
      .subscribe(resp => {
        console.log("Vendors:", resp);
        this.vendors = resp.Data;
      });
  }

}
