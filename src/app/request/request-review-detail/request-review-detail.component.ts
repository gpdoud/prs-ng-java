import { Component, OnInit } from '@angular/core';
import { SystemService } from '../../system/system.service';

@Component({
  selector: 'app-request-review-detail',
  templateUrl: './request-review-detail.component.html',
  styleUrls: ['./request-review-detail.component.css']
})
export class RequestReviewDetailComponent implements OnInit {

  constructor(
    private sys: SystemService
  ) { }

  ngOnInit() {
    this.sys.checkForLogin();
  }

}
