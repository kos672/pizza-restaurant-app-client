import {Injectable} from '@angular/core';
import {PurchaseSummaryService} from './purchase-summary.service';

@Injectable()
export class PurchaseService {

  products: { name: string, price: number }[] = [];

  constructor(private purchaseSummaryService: PurchaseSummaryService) {
  }

  addProduct(product: { name: string, price: number }) {
    this.products.push(product);
    this.purchaseSummaryService.summary.next(this.countSummaryPrice());
  }

  countSummaryPrice() {
    let sum = 0;
    for (let i = 0; i < this.products.length; i++) {
      sum += this.products[i].price;
    }
    return sum;
  }

}
