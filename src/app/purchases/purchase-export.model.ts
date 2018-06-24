import {Address} from '../delivery/address.model';
import {Dish} from '../dishes/dish.model';
import {Drink} from '../drinks/drink.model';

export class PurchaseExport {
  id: number;
  time: string;
  notes?: string;
  address: Address;
  houseNumber: string;
  flatNumber?: number;
  payMethod: string;
  dishes: Dish[];
  drinks: Drink[];
}
