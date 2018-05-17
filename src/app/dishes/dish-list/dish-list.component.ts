import {Component, OnDestroy, OnInit} from '@angular/core';
import {DishService} from '../dish.service';
import {Dish} from '../dish.model';

@Component({
  selector: 'app-dish-list',
  templateUrl: './dish-list.component.html',
  styleUrls: ['./dish-list.component.css']
})
export class DishListComponent implements OnInit {

  dishes: Dish[];
  filterCategory: number;

  constructor(private dishService: DishService) {
  }

  ngOnInit() {
    this.dishes = this.dishService.getDishes().slice();
  }

  setCategory(categoryNumber: number) {
    this.filterCategory = categoryNumber;
  }

}
