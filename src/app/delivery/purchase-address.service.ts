import {BehaviorSubject} from 'rxjs/BehaviorSubject';

export class PurchaseAddressService {
  purchaseAddress = new BehaviorSubject<{ houseNumber: string, flatNumber: number }>({houseNumber: '0', flatNumber: 0});
}
