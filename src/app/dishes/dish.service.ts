import {Dish} from './dish.model';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {GlobalConstants} from '../shared/global-constants';

@Injectable()
export class DishService {

  dishes: Dish[];

  constructor(private http: HttpClient) {
  }

  getDishes() {
    return this.http.get<Dish[]>(GlobalConstants.basePath + '/dishes');
  }

}
