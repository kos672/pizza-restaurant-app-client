import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppRoutingModule} from './shared/app-routing.module';
import {HeaderComponent} from './header/header.component';
import {DishesComponent} from './dishes/dishes.component';
import {DishComponent} from './dishes/dish/dish.component';
import {DishDetailComponent} from './dishes/dish-detail/dish-detail.component';
import {DishListComponent} from './dishes/dish-list/dish-list.component';
import {DishService} from './dishes/dish.service';
import {HttpClientModule} from '@angular/common/http';
import {DishCategoryPipe} from './shared/dish-category.pipe';
import {IngredientsComponent} from './ingredients/ingredients.component';
import {DrinksComponent} from './drinks/drinks.component';
import {DrinkComponent} from './drinks/drink/drink.component';
import {DrinkService} from './drinks/drink.service';
import {DeliveryComponent} from './delivery/delivery.component';
import {PurchaseAddressService} from './delivery/purchase-address.service';
import {PurchasesComponent} from './purchases/purchases.component';
import {PurchasesService} from './purchases/purchases.service';
import {ChangeTextDirective} from './shared/change-text.directive';
import {SummaryComponent} from './summary/summary.component';
import {ProductAddedDirective} from './shared/product-added.directive';
import {PayMethodService} from './shared/pay-method.service';
import {SuccessfulComponent} from './successful/successful.component';
import {HomeComponent} from './home/home.component';
import {AddressService} from './delivery/address.service';
import {MgmtComponent} from './mgmt/mgmt.component';
import {PurchaseDetailComponent} from './mgmt/purchase-detail/purchase-detail.component';
import {PurchaseComponent} from './mgmt/purchase/purchase.component';

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
    PurchasesComponent,
    ChangeTextDirective,
    SummaryComponent,
    ProductAddedDirective,
    SuccessfulComponent,
    HomeComponent,
    MgmtComponent,
    PurchaseDetailComponent,
    PurchaseComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [DishService, DrinkService, PurchaseAddressService, PurchasesService, PayMethodService, AddressService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
