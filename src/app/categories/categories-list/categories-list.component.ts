import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.css']
})
export class CategoriesListComponent implements OnInit {
  @Input()
  private categories: any[];
  private id: number;
  @Output()
  idChanged = new EventEmitter<number>();

  constructor(private rout: ActivatedRoute) { 
   // this.idChaged = new EventEmitter();
  }

  ngOnInit() {
    this.rout.paramMap
      .subscribe(maps =>{
        console.log(maps.get("id"));
        this.id = +maps.get("id");
      });
  }

  onClick(id: number){
    this.id = id;
    this.idChanged.emit(this.id);
  }
}
