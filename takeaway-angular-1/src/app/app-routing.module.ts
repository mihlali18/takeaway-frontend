import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BreakfastComponent } from './breakfast/breakfast.component';
import { HomePageComponent } from './home-page/home-page.component';
import{MenuComponent} from './menu/menu.component';
import{LunchComponent } from "./lunch/lunch.component";
import{MealsComponent} from "./meals/meals.component";
import{ SidesComponent}from "./sides/sides.component"
import { ContactComponent  } from './contact/contact.component';
import{CartComponent} from './cart/cart.component'

const routes: Routes = [
  { path: 'breakfast', component: BreakfastComponent },
  { path: 'home', component: HomePageComponent},
  {path:'menu', component:MenuComponent},
  {path:"breakfast" ,component:BreakfastComponent},
  {path:"lunch", component:LunchComponent},
  {path:"meals", component:MealsComponent},
  {path:"sides", component:SidesComponent},
  {path:"contact", component: ContactComponent},
  {path:"cart",component:CartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
