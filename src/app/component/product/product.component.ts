import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  @Input() product;
  
  constructor(
    private router: Router
  ) { }

  // ngOnInit(): void {
  // }

  viewProductDetails() {
    this.router.navigateByUrl(`product/${this.product._id}`);
  }

}
