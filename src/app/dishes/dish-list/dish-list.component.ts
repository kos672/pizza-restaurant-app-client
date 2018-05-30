import {Component, OnDestroy, OnInit} from '@angular/core';
import {DishService} from '../dish.service';
import {Dish} from '../dish.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-dish-list',
  templateUrl: './dish-list.component.html',
  styleUrls: ['./dish-list.component.css']
})
export class DishListComponent implements OnInit, OnDestroy {

  dishes: Dish[];
  filterCategory: number;
  subscription;

  constructor(private dishService: DishService, private router: Router) {
  }

  ngOnInit() {
    this.subscription = this.dishService.getDishes().subscribe(
      dishes => {
        this.dishes = dishes;
      }
    );
  }

  setCategory(categoryNumber: number) {
    this.filterCategory = categoryNumber;
    this.router.navigate(['dishes']);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
