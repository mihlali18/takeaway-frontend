import { Component, OnInit } from '@angular/core';
import { HomeService } from '../breakfast.service';
import { CartService } from '../cart.service';
import { Products } from '../cart.service';

@Component({
  selector: 'app-sides',
  templateUrl: './sides.component.html',
  styleUrls: ['./sides.component.css']
})
export class SidesComponent implements OnInit {

  products: any[] = []


  constructor(private homeService: HomeService,
    private cartService: CartService) { }

  ngOnInit(): void {
    this.getProducts()
   
  }
  getProducts() {
    this.homeService.getSides().subscribe(data =>{
      this.products =data
      console.log(this.products)
    }
    )
    
  }
  addToCart(product: Products) {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }

}
