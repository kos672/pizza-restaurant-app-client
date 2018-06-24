import {Component, OnDestroy, OnInit} from '@angular/core';
import {PurchasesService} from '../purchases/purchases.service';
import {Subscription} from 'rxjs/Subscription';
import {PurchaseExport} from '../purchases/purchase-export.model';

@Component({
  selector: 'app-mgmt',
  templateUrl: './mgmt.component.html',
  styleUrls: ['./mgmt.component.css']
})
export class MgmtComponent implements OnInit, OnDestroy {

  purchases: PurchaseExport[];
  purchasesChange$: Subscription;

  constructor(private purchasesService: PurchasesService) {
  }

  ngOnInit() {
    this.purchasesChange$ = this.purchasesService.getAllPurchases().subscribe(
      purchases => this.purchases = purchases
    );
  }

  ngOnDestroy() {
    this.purchasesChange$.unsubscribe();
  }

}
