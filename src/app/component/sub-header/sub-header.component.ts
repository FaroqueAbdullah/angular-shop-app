import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sub-header',
  templateUrl: './sub-header.component.html',
  styleUrls: ['./sub-header.component.css']
})
export class SubHeaderComponent implements OnInit {
  @Output() onDataSelect: EventEmitter<any> = new EventEmitter<any>();

  dropdownText = 'Default Sorting'

  constructor() { }

  ngOnInit(): void {
    
  }

  highToLow() {
    this.dropdownText = 'price high to low'
    this.onDataSelect.emit(1);
  }

  lowToHigh() {
    this.dropdownText = 'price low to high'
    this.onDataSelect.emit(2);
  }
}
