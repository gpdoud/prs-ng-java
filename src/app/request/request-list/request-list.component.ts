import { Component, OnInit } from '@angular/core';

import { SystemService } from '../../system/system.service';
import { RequestService } from '../request.service';
import { Request } from '../request.class';

@Component({
  selector: 'app-request-list',
  templateUrl: './request-list.component.html',
  styleUrls: ['./request-list.component.css']
})
export class RequestListComponent implements OnInit {

  requests: Request[];

  constructor(
    private sys: SystemService,
    private requestsvc: RequestService
  ) { }

  ngOnInit() {
    this.sys.checkForLogin();
    this.requestsvc.list()
      .subscribe(resp => {
        console.log("Requests:", resp);
        this.requests = resp.Data;
      });
  }

}
