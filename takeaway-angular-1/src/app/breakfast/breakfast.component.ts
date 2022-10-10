import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { HomeService } from '../breakfast.service';
import { CartService } from '../cart.service';


export class Products{
  constructor(
    public title: String,
    public image: String,
    public price: Number

  ){}
}

@Component({
  selector: 'app-breakfast',
  templateUrl: './breakfast.component.html',
  styleUrls: ['./breakfast.component.css']
})
export class BreakfastComponent implements OnInit {

  products: any = []

  constructor(private homeService: HomeService,private httpClient:HttpClient,private cartService: CartService) { }

  ngOnInit(): void {
    this.getProducts()
  }
  getProducts() {
    this.homeService.getBreakfast().subscribe(data =>{
      this.products =data
      // console.log(this.products)
    }
      )
    
  }
  addToCart(product: any) {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }
}
