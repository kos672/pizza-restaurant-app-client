import {Component, OnInit} from '@angular/core';
import {DishService} from '../dish.service';
import {Dish} from '../dish.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-dish-list',
  templateUrl: './dish-list.component.html',
  styleUrls: ['./dish-list.component.css']
})
export class DishListComponent implements OnInit {

  dishes: Dish[];
  filterCategory: number;

  constructor(private dishService: DishService, private router: Router) {
  }

  ngOnInit() {
    this.dishes = this.dishService.getDishes().slice();
  }

  setCategory(categoryNumber: number) {
    this.filterCategory = categoryNumber;
    this.router.navigate(['dishes']);
  }

}
