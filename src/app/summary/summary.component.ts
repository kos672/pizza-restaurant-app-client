import {Component, OnDestroy, OnInit} from '@angular/core';
import {PurchasesService} from '../purchases/purchases.service';
import {PurchaseAddressService} from '../delivery/purchase-address.service';
import {Address} from '../delivery/address.model';
import {Subscription} from 'rxjs/Subscription';
import {Product} from '../shared/product.model';
import {PayMethodService} from '../shared/pay-method.service';
import {Purchase} from '../purchases/purchase.model';
import {PayMethod} from '../shared/pay-method.model';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit, OnDestroy {

  addressChange$: Subscription;
  purchaseAddressChange$: Subscription;
  payMethodsChange$: Subscription;

  products: Product[] = [];

  address: Address;
  purchaseAddress: { houseNumber: string; flatNumber: number };

  ASAP = false;
  readonly timeFormat = {year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit'};
  deliveryTime;

  payMethods: PayMethod[];

  summaryForm: FormGroup;

  purchase: Purchase = {
    id: null,
    time: null,
    notes: null,
    address: null,
    houseNumber: null,
    flatNumber: null,
    payMethod: null,
    dishes: [],
    drinks: []
  };

  constructor(private purchaseService: PurchasesService,
              private purchaseAddressService: PurchaseAddressService,
              private payMethodService: PayMethodService,
              private formBuilder: FormBuilder,
              private router: Router
  ) {
  }

  ngOnInit() {
    this.initializeForm();
    this.subscribeToAddressChanges();
    this.subscribeToPayMethods();
    this.products = this.purchaseService.products;
    const minutes = 30;
    this.deliveryTime = new Date(Date.now() + 30 * 60000).toLocaleDateString('en-US', this.timeFormat);
  }

  initializeForm() {
    this.summaryForm = this.formBuilder.group({
      time: new FormControl('', Validators.required),
      payMethod: new FormControl('', Validators.required),
      notes: new FormControl('')
    });
  }

  subscribeToAddressChanges() {
    this.addressChange$ = this.purchaseAddressService.onAddressChanged.subscribe(
      next => this.address = next
    );
    this.purchaseAddressChange$ = this.purchaseAddressService.onPurchaseAddressChanged.subscribe(
      next => this.purchaseAddress = next
    );
  }

  subscribeToPayMethods() {
    this.payMethodsChange$ = this.payMethodService.getPayMethods().subscribe(
      methods => this.payMethods = methods
    );
  }

  onSubmit() {
    this.purchase.notes = this.summaryForm.get('notes').value;
    this.purchase.payMethod = this.summaryForm.get('payMethod').value;
    this.purchase.time = this.ASAP ? this.deliveryTime : this.separateTime(this.summaryForm.get('time').value);
    this.purchase.address = this.address;
    this.purchase.houseNumber = this.purchaseAddress.houseNumber;
    this.purchase.flatNumber = this.purchaseAddress.flatNumber;
    this.sortProducts(this.products, this.purchase.drinks, this.purchase.dishes);
    this.purchaseService.createPurchase(this.purchase).subscribe(
      observer => console.log(observer),
      error => console.log(error)
    );
    this.router.navigate(['successful']);
  }

  separateTime(input: string) {
    const splitted = input.split(':');
    const hours: number = parseInt(splitted[0]);
    const minutes: number = parseInt(splitted[1]);
    const now = new Date(Date.now());
    return new Date(now.getFullYear(), now.getMonth(), now.getDate(), hours, minutes).toLocaleDateString('en-US', this.timeFormat);
  }

  sortProducts(products: Product[], drinks: number[], dishes: number[]) {
    for (const product of products) {
      product.isDish ? dishes.push(product.id) : drinks.push(product.id);
    }
  }

  ngOnDestroy() {
    this.addressChange$.unsubscribe();
    this.purchaseAddressChange$.unsubscribe();
    this.payMethodsChange$.unsubscribe();
  }

}
