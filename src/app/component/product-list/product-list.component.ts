import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  public productList: Product[];

  constructor(
    private appService: AppService
  ) { }

  ngOnInit(): void {
    this.appService.currentProductList$
      .subscribe(res => {
        this.productList = res;
      })
  }

}
