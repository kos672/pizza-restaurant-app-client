import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {GlobalConstants} from '../shared/global-constants';
import {Address} from './address.model';

@Injectable()
export class AddressService {

  constructor(private http: HttpClient) {
  }

  getAddresses() {
    return this.http.get<Address[]>(GlobalConstants.basePath + '/addresses');
  }
}
