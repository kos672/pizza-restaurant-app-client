import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import {HeaderComponent} from './header/header.component';
import {DishesComponent} from './dishes/dishes.component';
import {DishComponent} from './dishes/dish/dish.component';
import {DishDetailComponent} from './dishes/dish-detail/dish-detail.component';
import {DishListComponent} from './dishes/dish-list/dish-list.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DishesComponent,
    DishComponent,
    DishDetailComponent,
    DishListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
