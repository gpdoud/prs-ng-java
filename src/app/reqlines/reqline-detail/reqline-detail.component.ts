import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ReqlineService } from '../reqline.service';
import { Reqline } from '../reqline.class';

@Component({
  selector: 'app-reqline-detail',
  templateUrl: './reqline-detail.component.html',
  styleUrls: ['./reqline-detail.component.css']
})
export class ReqlineDetailComponent implements OnInit {

  reqline: Reqline;

  delete(): void {
    this.reqlinesvc.remove(this.reqline)
      .subscribe(resp => {
        console.log("resp:", resp);
        this.router.navigateByUrl('/requests/lines/'+this.reqline.RequestId);
      });
  }

  constructor(
    private reqlinesvc: ReqlineService, 
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    // gets the :id from the router
    let id = this.route.snapshot.params.id;
    // get the reqline from the reqline service
    this.reqlinesvc.get(id)
      .subscribe(resp => {
        console.log("resp: ", resp);
        this.reqline = resp.Data;
      });
  }

}
