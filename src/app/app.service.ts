import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { Product } from './models/product.model';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  public apiBaseUrl = 'https://gist.githubusercontent.com/naieem/c138ff1f12847b2a1b8ad85866426d3d/raw/037825eee126d589ab3e1fff6c3d0119f33f3b5b/Products';
  
  private productList$ = new BehaviorSubject(null);
  currentProductList$ = this.productList$.asObservable();

  private cart$ = new BehaviorSubject(null);
  currentCart$ = this.cart$.asObservable();

  constructor(
    private http: HttpClient,
  ) { }

  getProductsAPI(): Observable<any> {
    return this.http.get(`${this.apiBaseUrl}`);
  }

  changeCurrentProductList(productList: Product[]) {
    this.productList$.next(productList);
  }

  changeCurrentCart(cart: Product[]) {
    this.cart$.next(cart);
  }
}
