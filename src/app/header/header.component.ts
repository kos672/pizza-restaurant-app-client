import { Component, OnInit } from '@angular/core';
import {PurchaseSummaryService} from '../purchase/purchase-summary.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  purchaseSummary = 0;

  constructor(private purchaseSummaryService: PurchaseSummaryService) { }

  ngOnInit() {
    this.purchaseSummaryService.summary.subscribe(
      observer => this.purchaseSummary = observer.valueOf()
    );
  }

}
