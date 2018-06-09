import {Component, OnInit} from '@angular/core';
import {PurchaseService} from './purchase.service';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.css']
})
export class PurchaseComponent implements OnInit {

  products: { name: string, price: number }[] = [];

  constructor(private purchaseService: PurchaseService) {
  }

  onDelete(id: number) {
    this.purchaseService.deleteProduct(id);
  }

  ngOnInit(): void {
    this.products = this.purchaseService.products;
  }

}
