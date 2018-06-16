import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Drink} from './drink.model';
import {GlobalConstants} from '../shared/global-constants';

@Injectable()
export class DrinkService {

  constructor(private http: HttpClient) {
  }

  getDrinks() {
    return this.http.get<Drink[]>(GlobalConstants.basePath + '/drinks');
  }


}
