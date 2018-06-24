import {Component, Input, OnInit} from '@angular/core';
import {Drink} from '../drink.model';
import {PurchasesService} from '../../purchases/purchases.service';

@Component({
  selector: 'app-drink',
  templateUrl: './drink.component.html',
  styleUrls: ['./drink.component.css']
})
export class DrinkComponent implements OnInit {

  @Input() drink: Drink;

  constructor(private purchaseService: PurchasesService) {
  }

  ngOnInit() {
  }

  onAddDrink() {
    this.purchaseService.addProduct({id: this.drink.id, name: this.drink.name, price: this.drink.price, isDish: false});
  }

}
