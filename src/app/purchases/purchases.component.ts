import {Component, OnInit} from '@angular/core';
import {PurchasesService} from './purchases.service';
import {Product} from '../shared/product.model';

@Component({
  selector: 'app-purchases',
  templateUrl: './purchases.component.html',
  styleUrls: ['./purchases.component.css']
})
export class PurchasesComponent implements OnInit {

  products: Product[] = [];

  constructor(private purchaseService: PurchasesService) {
  }

  onDelete(id: number) {
    this.purchaseService.deleteProduct(id);
  }

  ngOnInit(): void {
    this.products = this.purchaseService.products;
  }

}
