import {Pipe, PipeTransform} from '@angular/core';
import {Dish} from './dishes/dish.model';

@Pipe({
  name: 'dishCategory'
})
export class DishCategoryPipe implements PipeTransform {

  transform(dishes: Dish[], filterCategory: number): Dish[] {
    return filterCategory > 0 ? dishes.filter(dish => dish.categoryId === filterCategory) : dishes;
  }

}
