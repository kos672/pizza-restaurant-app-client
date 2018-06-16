import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {PayMethod} from './pay-method.model';
import {GlobalConstants} from './global-constants';

@Injectable()
export class PayMethodService {


  constructor(private http: HttpClient) {
  }

  getPayMethods() {
    return this.http.get<PayMethod[]>(GlobalConstants.basePath + '/pay-methods');
  }

}
