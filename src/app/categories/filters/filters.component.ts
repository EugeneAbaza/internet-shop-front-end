import { Filters } from './../../model/filters';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {
  @Output()
  private filters = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  applyFilters(priceFrom, priceTo){
    this.filters.emit(new Filters(priceFrom, priceTo))
  }

}
