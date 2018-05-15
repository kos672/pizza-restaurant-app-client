import {NgModule} from '@angular/core';
import {Route, RouterModule} from '@angular/router';
import {DishesComponent} from './dishes/dishes.component';
import {DishDetailComponent} from './dishes/dish-detail/dish-detail.component';

const appRoutes: Route[] = [
  {path: 'dishes', component: DishesComponent, children: [
    {path: ':id', component: DishDetailComponent}
    ]
  }
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
