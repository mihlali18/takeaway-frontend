import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Products } from '../cart.service';
import { HomeService } from '../breakfast.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public products: any =[];
  items = this.cartService.getItems();
  // item = this.cartService.sendItemsToStorage()
  values = this.cartService.getItem()
  product: any;

  constructor(
    private cartService: CartService,
    private homeService: HomeService,
  ) { }

  ngOnInit(): void {
    this.cartService.getItems().subscribe(res =>{
      this.products = res;
    })

    // this.delete( this.product)
  }
  delete( product: any): void {
    this.product = this.product.filter((h: any)=> h !== product);
    this.homeService.deleteProduct(product.id).subscribe();
  }
 
  // delete(hero: Hero): void {
  //   this.heroes = this.heroes.filter(h => h !== hero);
  //   this.heroService.deleteHero(hero.id).subscribe();
  // }
  
}
