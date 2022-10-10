import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor( private http: HttpClient ,
    ) { }
    private heroesUrl = 'http://localhost:2022/profolio/detail';  // URL to web api

  getProducts(): Observable<any> {
    return this.http.get<any>(this.heroesUrl)
  }
  deleteProduct(id: number): Observable<any> {
    const heroUrl = this.heroesUrl+"/"+id
  
    return this.http.delete<any>(heroUrl)
  }
  
  getBreakfast(): Observable<any> {
    return this.http.get<any>(this.heroesUrl+"/?title=breakfast")
  }

  getLunch(): Observable<any> {
    return this.http.get<any>(this.heroesUrl+"/?title=lunch")
  }

  getMeals(): Observable<any> {
    return this.http.get<any>(this.heroesUrl+"/?title=meals" )
  }

  getSides(): Observable<any> {
    return this.http.get<any>(this.heroesUrl+"/?title=sides" )
  }
 
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

}