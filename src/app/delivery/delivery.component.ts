import {Component, OnInit} from '@angular/core';
import {Address} from './address.model';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {PurchaseAddressService} from './purchase-address.service';
import {Router} from '@angular/router';

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
              private purchaseAddressService: PurchaseAddressService,
              private router: Router
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
    this.purchaseAddressService.onAddressChanged.next(this.addressForm.get('address').value);
    this.router.navigate(['/summary']);
    this.purchaseAddressService.onPurchaseAddressChanged.next(this.addressForm.get('purchaseAddress').value);
  }

}
