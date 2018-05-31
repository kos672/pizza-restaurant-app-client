import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Drink} from "./drink.model";

@Injectable()
export class DrinkService {

  readonly basePath = 'http://localhost:8080/drinks';

  constructor(private http: HttpClient) {
  }

  getDrinks() {
    return this.http.get<Drink[]>(this.basePath);
  }


}
