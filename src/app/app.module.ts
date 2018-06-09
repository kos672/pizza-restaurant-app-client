import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import {HeaderComponent} from './header/header.component';
import {DishesComponent} from './dishes/dishes.component';
import {DishComponent} from './dishes/dish/dish.component';
import {DishDetailComponent} from './dishes/dish-detail/dish-detail.component';
import {DishListComponent} from './dishes/dish-list/dish-list.component';
import {DishService} from './dishes/dish.service';
import {HttpClientModule} from '@angular/common/http';
import {DishCategoryPipe} from './dish-category.pipe';
import {IngredientsComponent} from './ingredients/ingredients.component';
import {DrinksComponent} from './drinks/drinks.component';
import {DrinkComponent} from './drinks/drink/drink.component';
import {DrinkService} from './drinks/drink.service';
import {DeliveryComponent} from './delivery/delivery.component';
import {PurchaseAddressService} from './delivery/purchase-address.service';
import {PurchaseComponent} from './purchase/purchase.component';
import {PurchaseService} from './purchase/purchase.service';
import {ChangeTextDirective} from './change-text.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DishesComponent,
    DishComponent,
    DishDetailComponent,
    DishListComponent,
    DishCategoryPipe,
    IngredientsComponent,
    DrinksComponent,
    DrinkComponent,
    DeliveryComponent,
    PurchaseComponent,
    ChangeTextDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [DishService, DrinkService, PurchaseAddressService, PurchaseService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
