import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {ActivatedRoute, Params} from '@angular/router';
import {PurchasesService} from '../../purchases/purchases.service';
import {Dish} from '../../dishes/dish.model';
import {Drink} from '../../drinks/drink.model';
import {PurchaseExport} from '../../purchases/purchase-export.model';

@Component({
  selector: 'app-purchase-detail',
  templateUrl: './purchase-detail.component.html',
  styleUrls: ['./purchase-detail.component.css']
})
export class PurchaseDetailComponent implements OnInit, OnDestroy {

  purchase: PurchaseExport = new PurchaseExport();
  id: number;
  purchases: PurchaseExport[];
  products: { name: string, price: number }[];

  routeChange$: Subscription;
  purchasesChange$: Subscription;

  constructor(private route: ActivatedRoute,
              private purchasesService: PurchasesService,
  ) {
  }

  ngOnInit() {
    this.routeChange$ = this.route.params.subscribe(
      (params: Params) => {
        this.products = [];
        this.id = +params['id'];
        this.purchasesChange$ = this.purchasesService.getAllPurchases().subscribe(
          purchases => {
            {
              this.purchases = purchases;
              this.purchase = this.purchases[this.id];
              this.moveDrinksAndDishesToProducts(this.purchase.dishes, this.purchase.drinks);
            }
          }
        );
      }
    );
  }

  moveDrinksAndDishesToProducts(dishes: Dish[], drinks: Drink[]) {
    for (const dish of dishes) {
      this.products.push({name: dish.name, price: dish.price});
    }
    for (const drink of drinks) {
      this.products.push({name: drink.name, price: drink.price});
    }
  }

  ngOnDestroy() {
    this.routeChange$.unsubscribe();
    this.purchasesChange$.unsubscribe();
  }

}
