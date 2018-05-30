import {Component, OnInit} from '@angular/core';
import {DrinkService} from "./drink.service";

@Component({
  selector: 'app-drinks',
  templateUrl: './drinks.component.html',
  styleUrls: ['./drinks.component.css']
})
export class DrinksComponent implements OnInit {

  drinks;

  constructor(private drinkService: DrinkService) {
  }

  ngOnInit() {
    this.drinks = this.drinkService.getDrinks();
  }

}
