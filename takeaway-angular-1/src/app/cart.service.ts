import { HttpClient } from '@angular/common/http';
import{ BehaviorSubject} from "rxjs"
 // import { Product } from './product';
import { Injectable } from '@angular/core';  
 export class Products {  

   constructor(    
     public title: string,
     public name:String,
     public image: String,    
     public price: string,          
     ) {   } }  
    
    @Injectable({   providedIn: 'root' }) 
export class CartService {   
  items: Products[] = [];   
  public productList = new BehaviorSubject<any>([])
  
  products: Products | undefined;  

  constructor(private http: HttpClient) { }   
  addToCart(product: Products){     
  this.items?.push(product); 
  this.productList.next(this.items)
  
  }   

  
  getItems() {     
  return this.productList.asObservable(); 
  } 
  setProductS( product:any){
    this.items.push(product)
    this.productList.next(product)
  }
  
  getItem(){
    var values = JSON.parse(`${localStorage.getItem("cart")}`);
    console.log(values)
    return values 
  }

  getTotalPrice(){
    let  grandTotal = 0;
    this.items.map((a:any)=>{
      grandTotal += a.total
    }) 
    return grandTotal
  }
  removeCartItem( product:any){
    this.items.map((a:any) =>{
      if (product.id === a.id ){
        // this.items.slice(index,1)
      }
    })
  }

  clearCart() {     
  this.items = [];   
  return this.items;  
 }  

  // getShippingPrices() {    
  // return this.http.get<{type: string, price: number}[]>('/assets/shipping.json');   }    
  // getProducts(){     this.http.get<any>('http://localhost:2022/profolio/detail')
  // .subscribe(       response => {         console.log(response[0]);        
  // this.products = response;  }    
  // );  
  // } 
}