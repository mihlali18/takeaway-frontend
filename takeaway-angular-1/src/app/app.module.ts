import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { BreakfastComponent } from './breakfast/breakfast.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MenuComponent } from './menu/menu.component';
import { LunchComponent } from './lunch/lunch.component';
import { MealsComponent } from './meals/meals.component';
import { SidesComponent } from './sides/sides.component';
import { ContactComponent } from './contact/contact.component';
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    BreakfastComponent,
    NavbarComponent,
    MenuComponent,
    LunchComponent,
    MealsComponent,
    SidesComponent,
    ContactComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
