import {NgModule} from '@angular/core';
import {Route, RouterModule} from '@angular/router';
import {DishesComponent} from './dishes/dishes.component';
import {DishDetailComponent} from './dishes/dish-detail/dish-detail.component';
import {DrinksComponent} from './drinks/drinks.component';
import {DeliveryComponent} from './delivery/delivery.component';
import {PurchaseComponent} from './purchase/purchase.component';
import {SummaryComponent} from './summary/summary.component';
import {SuccessfulComponent} from './successful/successful.component';

const appRoutes: Route[] = [
  {
    path: 'dishes', component: DishesComponent, children: [
      {path: ':id', component: DishDetailComponent}
    ]
  },
  {path: 'drinks', component: DrinksComponent},
  {path: 'delivery', component: DeliveryComponent},
  {path: 'purchase', component: PurchaseComponent},
  {path: 'summary', component: SummaryComponent},
  {path: 'successful', component: SuccessfulComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
