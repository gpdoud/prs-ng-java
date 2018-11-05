import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { SystemService } from '../../system/system.service';
import { ReqlineService } from '../reqline.service';
import { Reqline } from '../reqline.class';
import { ProductService } from '../../product/product.service';
import { Product } from '../../product/product.class';

@Component({
  selector: 'app-reqline-edit',
  templateUrl: './reqline-edit.component.html',
  styleUrls: ['./reqline-edit.component.css']
})
export class ReqlineEditComponent implements OnInit {

  reqline: Reqline;
  products: Product[];
  
  save(): void {
    console.log("reqline:", this.reqline, ", route:", this.reqline.RequestId);
    this.reqlinesvc.change(this.reqline)
      .subscribe(resp => {
        console.log("resp:", resp);
        this.router.navigateByUrl('/requests/lines/'+this.reqline.RequestId);
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
    let id = this.route.snapshot.params.id;
    this.reqlinesvc.get(id)
      .subscribe(resp => {
        console.log("resp:", resp);
        this.reqline = resp.Data;
      });

    this.productsvc.list()
      .subscribe(resp => {
        console.log("Resp:", resp);
        this.products = resp.Data;
      });
  }

}
