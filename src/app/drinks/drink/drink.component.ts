import {Component, Input, OnInit} from '@angular/core';
import {Drink} from '../drink.model';
import {PurchaseService} from '../../purchase/purchase.service';

@Component({
  selector: 'app-drink',
  templateUrl: './drink.component.html',
  styleUrls: ['./drink.component.css']
})
export class DrinkComponent implements OnInit {

  @Input() drink: Drink;

  constructor(private purchaseService: PurchaseService) {
  }

  ngOnInit() {
  }

  onAddDrink() {
    this.purchaseService.addProduct({name: this.drink.name, price: this.drink.price});
  }

}
