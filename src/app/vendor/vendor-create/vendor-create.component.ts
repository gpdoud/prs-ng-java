import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SystemService } from '../../system/system.service';
import { VendorService } from '../vendor.service';
import { Vendor } from '../vendor.class';

@Component({
  selector: 'app-vendor-create',
  templateUrl: './vendor-create.component.html',
  styleUrls: ['./vendor-create.component.css']
})
export class VendorCreateComponent implements OnInit {

  vendor: Vendor = new Vendor();

  save(): void {
    this.vendorsvc.create(this.vendor)
      .subscribe(resp => {
        console.log("resp:", resp);
        this.router.navigateByUrl('/vendors/list');
      });
  }
  
  constructor(
    private sys: SystemService,
    private vendorsvc: VendorService,
    private router: Router
  ) { }

  ngOnInit() {
  }

}
