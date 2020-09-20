import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cart-total',
  templateUrl: './cart-total.component.html',
  styleUrls: ['./cart-total.component.css']
})
export class CartTotalComponent implements OnInit {
  @Input() subtotal;

  constructor() { }

  ngOnInit(): void {
  }

}
