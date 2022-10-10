import { Component, OnInit } from '@angular/core';
import { HomeService } from '../breakfast.service';
import { CartService } from '../cart.service';
import { Products } from '../cart.service';



@Component({
  selector: 'app-lunch',
  templateUrl: './lunch.component.html',
  styleUrls: ['./lunch.component.css']
})
export class LunchComponent implements OnInit {
  products: any[] = []

  constructor(private homeService: HomeService,
    private cartService: CartService) { }

  ngOnInit(): void {
    this.getProducts()
  }

  getProducts() {
    this.homeService.getLunch().subscribe(data =>{
      this.products =data
      console.log(this.products)
    }
    )
    
  }

  addToCart(product: Products) {
    this.cartService.addToCart(product );
    window.alert('Your product has been added to the cart!');

  }

  


}
