import {Component, OnDestroy, OnInit} from '@angular/core';
import {Dish} from '../dish.model';
import {DishService} from '../dish.service';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-dish-detail',
  templateUrl: './dish-detail.component.html',
  styleUrls: ['./dish-detail.component.css']
})
export class DishDetailComponent implements OnInit, OnDestroy {

  dish: Dish;
  id: number;
  subscription;

  constructor(private dishService: DishService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
      }
    );
    this.subscription = this.dishService.getDishes().subscribe(
      dishes => {
        this.dish = dishes[this.id]
      }
    )
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }


}
