import {Subject} from 'rxjs/Subject';
import {Product} from '../shared/product.model';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Purchase} from './purchase.model';
import {GlobalConstants} from '../shared/global-constants';

@Injectable()
export class PurchaseService {

  products: Product[] = [];
  onProductPriceChanged = new Subject<number>();

  constructor(private http: HttpClient) {
  }

  createPurchase(purchase: Purchase) {
    return this.http.post(GlobalConstants.basePath + '/purchases', purchase);
  }

  addProduct(product: Product) {
    this.products.push(product);
    this.onProductPriceChanged.next(this.countSummaryPrice());
  }

  deleteProduct(id: number) {
    this.products.splice(id, 1);
    this.onProductPriceChanged.next(this.countSummaryPrice());
  }

  countSummaryPrice() {
    return this.products.reduce((acc, product) => acc + product.price, 0);
  }

}
