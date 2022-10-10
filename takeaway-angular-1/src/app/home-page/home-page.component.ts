import { Component, OnInit } from '@angular/core';
import { HomeService } from '../breakfast.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  products: any[] = []
  constructor( private homeService: HomeService ) { }
  data = []
  ngOnInit(): void {
   
  }

  getProducts() {
    this.homeService.getBreakfast().subscribe(data =>{
      this.products =data
      console.log(this.products)
    }
     )
    
  }

  
}
