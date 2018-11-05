import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { SystemService } from '../../system/system.service';
import { VendorService } from '../vendor.service';
import { Vendor } from '../vendor.class';

@Component({
  selector: 'app-vendor-detail',
  templateUrl: './vendor-detail.component.html',
  styleUrls: ['./vendor-detail.component.css']
})
export class VendorDetailComponent implements OnInit {

  isAdmin: boolean;
  vendor: Vendor;

  delete(): void {
    this.vendorsvc.remove(this.vendor)
      .subscribe(resp => {
        console.log("resp:", resp);
        this.router.navigateByUrl('/vendors/list');
      });
  }

  constructor(
    private sys: SystemService,
    private vendorsvc: VendorService, 
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    // gets the :id from the router
    let id = this.route.snapshot.params.id;
    // get the vendor from the vendor service
    this.vendorsvc.get(id)
      .subscribe(resp => {
        console.log("resp: ", resp);
        this.vendor = resp.Data;
      });
    this.isAdmin = (this.sys.user != null) ? this.sys.user.IsAdmin : false;
  }

}
