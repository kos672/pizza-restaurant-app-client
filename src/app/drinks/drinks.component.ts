import {Component, OnDestroy, OnInit} from '@angular/core';
import {DrinkService} from "./drink.service";
import {Drink} from "./drink.model";

@Component({
  selector: 'app-drinks',
  templateUrl: './drinks.component.html',
  styleUrls: ['./drinks.component.css']
})
export class DrinksComponent implements OnInit, OnDestroy {

  drinks: Drink[];
  subscription;

  constructor(private drinkService: DrinkService) {
  }

  ngOnInit() {
    this.subscription = this.drinkService.getDrinks().subscribe(
      drinks => {
        this.drinks = drinks;
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }


}
