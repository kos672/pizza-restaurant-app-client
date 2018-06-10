import {Component, OnDestroy, OnInit} from '@angular/core';
import {PurchaseService} from '../purchase/purchase.service';
import {PurchaseAddressService} from '../delivery/purchase-address.service';
import {Address} from '../delivery/address.model';
import {Subscription} from 'rxjs/Subscription';
import {Product} from '../shared/product.model';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit, OnDestroy {

  products: Product[] = [];
  address: Address;
  purchaseAddress: { houseNumber: string; flatNumber: number };
  addressChange$: Subscription;
  purchaseAddressChange$: Subscription;
  ASAP = false;
  now;

  constructor(private purchaseService: PurchaseService,
              private purchaseAddressService: PurchaseAddressService
  ) {
  }

  ngOnInit() {
    this.addressChange$ = this.purchaseAddressService.onAddressChanged.subscribe(
      next => this.address = next
    );
    this.purchaseAddressChange$ = this.purchaseAddressService.onPurchaseAddressChanged.subscribe(
      next => this.purchaseAddress = next
    )
    this.products = this.purchaseService.products;
    this.now = new Date(Date.now() + 30 * 60000);
  }

  ngOnDestroy() {
    this.addressChange$.unsubscribe();
    this.purchaseAddressChange$.unsubscribe();
  }

}
