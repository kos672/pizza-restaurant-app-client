import {Subject} from 'rxjs/Subject';

export class PurchaseService {

  products: { name: string, price: number }[] = [];
  onProductPriceChanged = new Subject<number>();

  addProduct(product: { name: string, price: number }) {
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
