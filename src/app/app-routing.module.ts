import {NgModule} from '@angular/core';
import {Route, RouterModule} from '@angular/router';
import {DishesComponent} from './dishes/dishes.component';
import {DishDetailComponent} from './dishes/dish-detail/dish-detail.component';
import {DrinksComponent} from './drinks/drinks.component';
import {DeliveryComponent} from './delivery/delivery.component';

const appRoutes: Route[] = [
  {
    path: 'dishes', component: DishesComponent, children: [
      {path: ':id', component: DishDetailComponent}
    ]
  },
  {path: 'drinks', component: DrinksComponent},
  {path: 'delivery', component: DeliveryComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
