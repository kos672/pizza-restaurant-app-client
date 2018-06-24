import {Address} from '../delivery/address.model';

export interface Purchase {
  id: number;
  time: string;
  notes?: string;
  address: Address;
  houseNumber: string;
  flatNumber?: number;
  payMethod: number;
  dishes: number[];
  drinks: number[];
}
