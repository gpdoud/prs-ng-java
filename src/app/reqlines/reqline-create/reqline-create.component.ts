import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { SystemService } from '../../system/system.service';
import { ReqlineService } from '../reqline.service';
import { Reqline } from '../reqline.class';
import { ProductService } from '../../product/product.service';
import { Product } from '../../product/product.class';

@Component({
  selector: 'app-reqline-create',
  templateUrl: './reqline-create.component.html',
  styleUrls: ['./reqline-create.component.css']
})
export class ReqlineCreateComponent implements OnInit {

  prid: number;
  reqline: Reqline = new Reqline();
  products: Product[];
  
  save(): void {
    this.reqline.RequestId = Number(this.prid);
    console.log("reqline:", this.reqline, ", route:", this.reqline.RequestId);
    this.reqlinesvc.create(this.reqline)
      .subscribe(resp => {
        console.log("resp:", resp);
        this.router.navigateByUrl('/requests/lines/'+this.prid);
      });
  }

  constructor(
    private sys: SystemService,
    private reqlinesvc: ReqlineService,
    private productsvc: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.prid = this.route.snapshot.params.prid;

    this.productsvc.list()
      .subscribe(resp => {
        console.log("Resp:", resp);
        this.products = resp.Data;
      });
  }

}
