import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-cart-preview',
  templateUrl: './cart-preview.component.html',
  styleUrls: ['./cart-preview.component.css']
})
export class CartPreviewComponent implements OnInit {
  public productListInCart: Product[] = [];
  public subtotal = 0;

  constructor(
    private appService: AppService
  ) { }

  ngOnInit(): void {
    this.appService.currentCart$
      .subscribe(res => {
        this.productListInCart = res ? res : [];
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
