import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {PurchaseAddressService} from './purchase-address.service';
import {Router} from '@angular/router';
import {AddressService} from './address.service';
import {Subscription} from 'rxjs/Subscription';
import {Observable} from 'rxjs/Observable';
import {Address} from './address.model';

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.css']
})
export class DeliveryComponent implements OnInit, OnDestroy {

  addressForm: FormGroup;
  isPrivateHouse = false;
  addresses: Address[];

  addressesChange$: Subscription;

  constructor(private formBuilder: FormBuilder,
              private purchaseAddressService: PurchaseAddressService,
              private router: Router,
              private addressService: AddressService
  ) {
  }

  ngOnInit() {
    this.addressesChange$ = this.addressService.getAddresses().subscribe(
      addresses => this.addresses = addresses
    );
    this.addressForm = this.formBuilder.group({
      address: new FormGroup({
        city: new FormControl('', Validators.required),
        street: new FormControl('', Validators.required)
      }, null, this.availableDeliveryAddresses.bind(this)),
      purchaseAddress: new FormGroup({
        houseNumber: new FormControl('', Validators.required),
        flatNumber: new FormControl('')
      })
    });
  }

  availableDeliveryAddresses(formGroup: FormGroup): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve) => {
      setTimeout(() => {
        for (let address of this.addresses) {
          if (address.city === formGroup.controls['city'].value && address.street === formGroup.controls['street'].value) {
            resolve(null);
            return promise;
          }
        }
        resolve({'noAddress': true});
      }, 1500);
    });
    return promise;
  }

  onSubmit() {
    this.purchaseAddressService.onAddressChanged.next(this.addressForm.get('address').value);
    this.router.navigate(['/summary']);
    this.purchaseAddressService.onPurchaseAddressChanged.next(this.addressForm.get('purchaseAddress').value);
  }

  ngOnDestroy() {
    this.addressesChange$.unsubscribe();
  }

}
