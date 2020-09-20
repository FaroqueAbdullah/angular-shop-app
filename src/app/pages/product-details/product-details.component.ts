import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { AppService } from 'src/app/app.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  public productListInStock: Product[] = [];
  public product: Product;
  productID = ''

  constructor(
    private appService: AppService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.productID = this.route.snapshot.params.product_id;
  }

  ngOnInit(): void {
    this.appService.currentProductList$
      .subscribe(res => {
        this.productListInStock = res ? res : [];
      })
    this.product = this.findProductQuantityInStock()
  }

  findProductQuantityInStock() {
    let product = this.productListInStock.length === 0 ? null : this.productListInStock.find(o => o._id === this.productID);
    return product;
  }

}
