import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cart-product-list',
  templateUrl: './cart-product-list.component.html',
  styleUrls: ['./cart-product-list.component.css']
})
export class CartProductListComponent implements OnInit {
  @Input() productListInCart;

  constructor() { }

  ngOnInit(): void {
  }

}
