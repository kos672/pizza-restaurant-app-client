import {NgModule} from '@angular/core';
import {Route, RouterModule} from '@angular/router';
import {DishesComponent} from '../dishes/dishes.component';
import {DishDetailComponent} from '../dishes/dish-detail/dish-detail.component';
import {DrinksComponent} from '../drinks/drinks.component';
import {DeliveryComponent} from '../delivery/delivery.component';
import {PurchasesComponent} from '../purchases/purchases.component';
import {SummaryComponent} from '../summary/summary.component';
import {SuccessfulComponent} from '../successful/successful.component';
import {HomeComponent} from '../home/home.component';
import {MgmtComponent} from '../mgmt/mgmt.component';
import {PurchaseDetailComponent} from '../mgmt/purchase-detail/purchase-detail.component';

const appRoutes: Route[] = [
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {
    path: 'dishes', component: DishesComponent, children: [
      {path: ':id', component: DishDetailComponent}
    ]
  },
  {path: 'drinks', component: DrinksComponent},
  {path: 'delivery', component: DeliveryComponent},
  {path: 'basket', component: PurchasesComponent},
  {path: 'summary', component: SummaryComponent},
  {path: 'successful', component: SuccessfulComponent},
  {
    path: 'mgmt', component: MgmtComponent, children: [
      {path: ':id', component: PurchaseDetailComponent}
    ]
  }
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
