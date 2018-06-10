import {Component, OnInit} from '@angular/core';
import {PurchaseService} from './purchase.service';
import {Product} from '../shared/product.model';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.css']
})
export class PurchaseComponent implements OnInit {

  products: Product[] = [];

  constructor(private purchaseService: PurchaseService) {
  }

  onDelete(id: number) {
    this.purchaseService.deleteProduct(id);
  }

  ngOnInit(): void {
    this.products = this.purchaseService.products;
  }

}
