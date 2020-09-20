import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import * as _ from 'lodash';


@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {
  public searchData = [{id: 543245, name: 'sadfjh'}];
  public selectedData = null;
  public activeDropdown = true;
  public onDataSelect: EventEmitter<any> = new EventEmitter<any>();


  searchFocused = false;
  keyword = 'name';


  initialValue = null;

  constructor() { }

  ngOnInit(): void {
    if(!_.isEmpty(this.selectedData)) {
      this.initialValue = this.selectedData
    }
  }

  selectEvent(item) {
    if(this.selectedData !== item) {
      this.onDataSelect.emit(item);
    }
    this.selectedData === item
  }

  onChangeSearch(val: string) {
    // fetch remote data from here
    // And reassign the 'data' which is binded to 'data' property.
  }

  onFocused() {
    this.searchFocused = true;
  }
  onFocusedOut() {
    this.searchFocused = false;
  }

}
