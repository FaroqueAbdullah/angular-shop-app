import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { AppService } from 'src/app/app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-to-cart-button',
  templateUrl: './add-to-cart-button.component.html',
  styleUrls: ['./add-to-cart-button.component.css']
})
export class AddToCartButtonComponent implements OnInit {
  @Input() selectedProduct: Product;

  public productListInStock: Product[] = [];
  public productListInCart: Product[] = [];

  public productQuantityInStock = 0;
  public productQuantityInCart = 0;

  constructor(
    private appService: AppService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.appService.currentProductList$
      .subscribe(res => {
        this.productListInStock = res ? res : [];
        this.productQuantityInStock = this.findProductQuantityInStock();
        this.productQuantityInCart = this.findProductQuantityInCart();
      })
    this.appService.currentCart$
      .subscribe(res => {
        this.productListInCart = res ? res : [];
        this.productQuantityInStock = this.findProductQuantityInStock();
        this.productQuantityInCart = this.findProductQuantityInCart();
      })
  }

  addToCart() {
    let updatedStock = []
    let updatedCart = []

    updatedStock = this.productListInStock.map( res => {
      if (res._id === this.selectedProduct._id) {
        return {...res, stock: res.stock - 1}
      } else {
        return res
      }
    })

    if (this.productQuantityInCart) {
      updatedCart = this.productListInCart.map( res => {
        if (res._id === this.selectedProduct._id) {
          return {...res, stock: res.stock + 1}
        } else {
          return res
        }
      })
    } else {
      updatedCart = [...this.productListInCart, {...this.selectedProduct, stock: 1} ]
    }

    this.appService.changeCurrentProductList(updatedStock)
    this.appService.changeCurrentCart(updatedCart)
  }

  viewCart() {
    this.router.navigateByUrl('cart');
  }

  findProductQuantityInStock() {
    let product = this.productListInStock.length === 0 ? null : this.productListInStock.find(o => o._id === this.selectedProduct._id);
    if (product) {
      return product.stock
    } else {
      return 0;
    }
  }

  findProductQuantityInCart() {
    let product = this.productListInCart.length === 0 ? null : this.productListInCart.find(o => o._id === this.selectedProduct._id);
    if (product) {
      return product.stock
    } else {
      return 0;
    }
  }

}
