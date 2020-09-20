import { Component } from '@angular/core';
import { AppService } from './app.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'selise-shop';
  

  constructor(
    private appService: AppService
  ) {}

  ngOnInit() {
    this.appService.getProductsAPI()
    .subscribe(res => {
      this.appService.changeCurrentProductList(res)
    });
  }
}
