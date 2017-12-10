import { CategoriesServiceService } from './../servises/categories-service.service';
import { Component, OnInit } from '@angular/core';
import { Filters } from '../model/filters';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  private categories: any[];
  private id: number;
  private b = false;
  private filters = new Filters('', '');

  constructor(private service: CategoriesServiceService) { }

  ngOnInit() {
    this.service.getCategories()
    .subscribe(respong => {
        this.categories = respong.json();
    });
  }

  onIdChange(event){
    this.id = event;
  }

  changeFilters(event){
    this.filters = event;
  }

}
