import {Component, OnDestroy, OnInit} from '@angular/core';
import {PurchaseService} from '../purchase/purchase.service';
import {PurchaseAddressService} from '../delivery/purchase-address.service';
import {Address} from '../delivery/address.model';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit, OnDestroy {

  products: { name: string, price: number }[] = [];
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
    this.now = new Date(Date.now() + this.simulateMinutesDependingOnDayTime() * 60000);
  }

  simulateMinutesDependingOnDayTime(): number {
    const currentTime = new Date(Date.now());
    console.log(currentTime.getHours())
    if (currentTime.getHours() >= 8 && currentTime.getHours() < 11 || currentTime.getHours() >= 15 && currentTime.getHours() < 20) {
      return 40;
    } else if (currentTime.getHours() > 11 && currentTime.getHours() < 15 || currentTime.getHours() >= 20 && currentTime.getHours() <= 23) {
      return 20;
    }
  }

  ngOnDestroy() {
    this.addressChange$.unsubscribe();
  }

}
