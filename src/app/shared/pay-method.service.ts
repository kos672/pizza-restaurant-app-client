import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {PayMethod} from './pay-method.model';

@Injectable()
export class PayMethodService {

  readonly basePath = 'http://localhost:8080/pay-methods';

  constructor(private http: HttpClient) {
  }

  getPayMethods() {
    return this.http.get<PayMethod[]>(this.basePath);
  }

}
