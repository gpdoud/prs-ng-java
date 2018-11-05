import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { SystemService } from '../../system/system.service';
import { RequestService } from '../request.service';
import { Request } from '../request.class';

@Component({
  selector: 'app-request-lines',
  templateUrl: './request-lines.component.html',
  styleUrls: ['./request-lines.component.css']
})
export class RequestLinesComponent implements OnInit {

  request: Request;

  constructor(
    private sys: SystemService,
    private requestsvc: RequestService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.sys.checkForLogin();
    let id = this.route.snapshot.params.id;
    console.log("PrId:", id);
    this.requestsvc.get(id)
      .subscribe(resp => {
        console.log("Request:", resp);
        this.request = resp.Data;
      });
  }

}
