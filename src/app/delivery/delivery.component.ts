import {Component, OnInit} from '@angular/core';
import {Address} from './address.model';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.css']
})
export class DeliveryComponent implements OnInit {

  addressForm: FormGroup;
  address: Address;

  constructor(private formBuilder: FormBuilder,
              // private purchaseAddressService: PurchaseAddressService
  ) {
  }

  ngOnInit() {
    this.addressForm = this.formBuilder.group({
      address: new FormGroup({
        city: new FormControl(''),
        street: new FormControl('')
      }),
      purchaseAddress: new FormGroup({
        houseNumber: new FormControl(''),
        flatNumber: new FormControl('')
      })
    });
  }

  onSubmit() {
    this.address = this.addressForm.get('address').value;
    // TODO: don't forget to pass 'purchaseAddress' formGroup further
    // this.purchaseAddressService.purchaseAddress.next(
    //   this.addressForm.get('purchaseAddress').value
    // );
  }

}
