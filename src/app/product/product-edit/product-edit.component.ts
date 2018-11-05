import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { SystemService } from '../../system/system.service';
import { ProductService } from '../product.service';
import { Product } from '../product.class';
import { VendorService } from '../../vendor/vendor.service';
import { Vendor } from '../../vendor/vendor.class';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  product: Product;
  vendors: Vendor[];
  
  save(): void {
    this.productsvc.change(this.product)
      .subscribe(resp => {
        console.log("resp:", resp);
        this.router.navigateByUrl('/products/list');
      });
  }

  constructor(
    private sys: SystemService,
    private productsvc: ProductService,
    private vendorsvc: VendorService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.sys.checkForLogin();
    let id = this.route.snapshot.params.id;
    this.productsvc.get(id)
      .subscribe(resp => {
        console.log("resp:", resp);
        this.product = resp.Data;
      });

    this.vendorsvc.list()
      .subscribe(resp => {
        console.log("Resp:", resp);
        this.vendors = resp.Data;
      });
  }

}
