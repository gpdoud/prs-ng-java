import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { ProductCreateComponent } from './product/product-create/product-create.component';
import { ProductEditComponent } from './product/product-edit/product-edit.component';

import { ReqlineDetailComponent } from './reqlines/reqline-detail/reqline-detail.component';
import { ReqlineEditComponent } from './reqlines/reqline-edit/reqline-edit.component';
import { ReqlineCreateComponent } from './reqlines/reqline-create/reqline-create.component';

import { RequestListComponent } from './request/request-list/request-list.component';
import { RequestDetailComponent } from './request/request-detail/request-detail.component';
import { RequestCreateComponent } from './request/request-create/request-create.component';
import { RequestEditComponent } from './request/request-edit/request-edit.component';
import { RequestLinesComponent } from './request/request-lines/request-lines.component';

import { UserListComponent } from './user/user-list/user-list.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { UserCreateComponent } from './user/user-create/user-create.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { UserLoginComponent } from './user/user-login/user-login.component';

import { VendorListComponent } from './vendor/vendor-list/vendor-list.component';
import { VendorDetailComponent } from './vendor/vendor-detail/vendor-detail.component';
import { VendorCreateComponent } from './vendor/vendor-create/vendor-create.component';
import { VendorEditComponent } from './vendor/vendor-edit/vendor-edit.component';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: '', redirectTo: '/users/login', pathMatch: 'full' },

  { path: 'products/list', component: ProductListComponent },
  { path: 'products/create', component: ProductCreateComponent },
  { path: 'products/detail/:id', component: ProductDetailComponent },
  { path: 'products/edit/:id', component: ProductEditComponent },

  { path: 'reqlines/create/:prid', component: ReqlineCreateComponent },
  { path: 'reqlines/detail/:id', component: ReqlineDetailComponent },
  { path: 'reqlines/edit/:id', component: ReqlineEditComponent },

  { path: 'requests/list', component: RequestListComponent },
  { path: 'requests/create', component: RequestCreateComponent },
  { path: 'requests/detail/:id', component: RequestDetailComponent },
  { path: 'requests/edit/:id', component: RequestEditComponent },
  { path: 'requests/lines/:id', component: RequestLinesComponent },

  { path: 'users/list', component: UserListComponent },
  { path: 'users/create', component: UserCreateComponent },
  { path: 'users/detail/:id', component: UserDetailComponent },
  { path: 'users/edit/:id', component: UserEditComponent },
  { path: 'users/login', component: UserLoginComponent },

  { path: 'vendors/list', component: VendorListComponent },
  { path: 'vendors/detail/:id', component: VendorDetailComponent },
  { path: 'vendors/create', component: VendorCreateComponent },
  { path: 'vendors/edit/:id', component: VendorEditComponent },
  
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', component: UserListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
