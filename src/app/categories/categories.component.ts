import { CategoriesServiceService } from './../servises/categories-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  private categories: any[];
  private id: number;

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

}
