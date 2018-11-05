import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SystemService } from '../../system/system.service';
import { ProductService } from '../product.service';
import { Product } from '../product.class';
import { VendorService } from '../../vendor/vendor.service';
import { Vendor } from '../../vendor/vendor.class'

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  product: Product = new Product();
  vendors: Vendor[];

  save(): void {
    this.productsvc.create(this.product)
      .subscribe(resp => {
        console.log("resp:", resp);
        this.router.navigateByUrl('/products/list');
      });
  }
  
  constructor(
    private sys: SystemService,
    private productsvc: ProductService,
    private vendorsvc: VendorService,
    private router: Router
  ) { }

  ngOnInit() {
    this.sys.checkForLogin();
    this.vendorsvc.list()
      .subscribe(resp => {
        console.log("Vendors:", resp);
        this.vendors = resp.Data;
      });
  }

}
