import {BehaviorSubject} from 'rxjs/BehaviorSubject';

export class PurchaseAddressService {
  onAddressChanged = new BehaviorSubject<{ city: string, street: string }>({city: '', street: ''});
  onPurchaseAddressChanged = new BehaviorSubject<{ houseNumber: string, flatNumber: number }>({
    houseNumber: '',
    flatNumber: 0
  });
}
