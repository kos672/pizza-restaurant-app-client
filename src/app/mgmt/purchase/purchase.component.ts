import {Component, Input, OnInit} from '@angular/core';
import {Purchase} from '../../purchases/purchase.model';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.css']
})
export class PurchaseComponent implements OnInit {

  @Input() purchase: Purchase;
  @Input() purchaseId: number;

  constructor() {
  }

  ngOnInit() {
  }

}
