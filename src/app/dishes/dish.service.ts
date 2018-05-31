import {Dish} from './dish.model';
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class DishService {

  readonly basePath = 'http://localhost:8080/dishes';
  dishes: Dish[];

  constructor(private http: HttpClient) {
  }

  getDishes() {
    return this.http.get<Dish[]>(this.basePath);
  }

}
