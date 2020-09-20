import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private appService: AppService
  ) { }

  ngOnInit(): void {

  }

  setSortingMethod(e) {
    this.appService.currentProductList$
      .subscribe(res => {
        let sortingList
        if (e === 1) {
          sortingList = res.sort((a, b) => (a.price < b.price) ? 1 : -1)
        } else {
          sortingList = res.sort((a, b) => (a.price > b.price) ? 1 : -1)
        }
        this.appService.changeCurrentProductList(sortingList)
      })

  }

}
