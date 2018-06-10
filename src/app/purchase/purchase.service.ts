import {Subject} from 'rxjs/Subject';
import {Product} from '../shared/product.model';

export class PurchaseService {

  products: Product[] = [];
  onProductPriceChanged = new Subject<number>();

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
