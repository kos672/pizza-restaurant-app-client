import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {PurchasesService} from '../purchases/purchases.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

  purchaseSummary = 0;
  purchaseSummaryChange$: Subscription;

  constructor(private purchaseService: PurchasesService) {
  }

  ngOnInit() {
    this.purchaseSummaryChange$ = this.purchaseService.onProductPriceChanged.subscribe(
      next => this.purchaseSummary = next
    );
  }

  ngOnDestroy(): void {
    this.purchaseSummaryChange$.unsubscribe();
  }

}
