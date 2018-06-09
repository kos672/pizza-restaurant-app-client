import {Component, OnInit} from '@angular/core';
import {Address} from './address.model';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {PurchaseAddressService} from './purchase-address.service';

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.css']
})
export class DeliveryComponent implements OnInit {

  addressForm: FormGroup;
  address: Address;
  isPrivateHouse = false;

  constructor(private formBuilder: FormBuilder,
              private purchaseAddressService: PurchaseAddressService
  ) {
  }

  ngOnInit() {
    this.addressForm = this.formBuilder.group({
      address: new FormGroup({
        city: new FormControl('', Validators.required),
        street: new FormControl('', Validators.required)
      }),
      purchaseAddress: new FormGroup({
        houseNumber: new FormControl('', Validators.required),
        flatNumber: new FormControl('')
      })
    });
  }

  onSubmit() {
    this.address = this.addressForm.get('address').value;
    // TODO: don't forget to pass 'purchaseAddress' formGroup further
    this.purchaseAddressService.purchaseAddress.next(
      this.addressForm.get('purchaseAddress').value
    );
  }

}
