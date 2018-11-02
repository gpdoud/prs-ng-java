import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { RequestService } from '../request.service';
import { Request } from '../request.class';

@Component({
  selector: 'app-request-detail',
  templateUrl: './request-detail.component.html',
  styleUrls: ['./request-detail.component.css']
})
export class RequestDetailComponent implements OnInit {

  request: Request;

  delete(): void {
    this.requestsvc.remove(this.request)
      .subscribe(resp => {
        console.log("resp:", resp);
        this.router.navigateByUrl('/requests/list');
      });
  }

  constructor(
    private requestsvc: RequestService, 
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    // gets the :id from the router
    let id = this.route.snapshot.params.id;
    // get the request from the request service
    this.requestsvc.get(id)
      .subscribe(resp => {
        console.log("resp: ", resp);
        this.request = resp.Data;
      });
  }

}
