import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-cart-details',
  templateUrl: './cart-details.component.html',
  styleUrls: ['./cart-details.component.css']
})
export class CartDetailsComponent implements OnInit {
  public productListInCart = [];
  public subtotal = 0;

  constructor(
    private appService: AppService
  ) { }

  ngOnInit(): void {
    this.appService.currentCart$
      .subscribe(res => {
        this.productListInCart = res ? res.map( product => {
          return {...product, subTotal: product.stock * product.price}
        }) : [];
        this.calculateSubtotal()
      })
  }

  calculateSubtotal() {
    let totalPrice = 0;
    this.productListInCart.map( res => {
      totalPrice = totalPrice + (res.stock * res.price)
    })
    this.subtotal = totalPrice
  }

}
