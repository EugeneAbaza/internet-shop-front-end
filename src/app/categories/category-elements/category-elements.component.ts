import { Filters } from './../../model/filters';
import { ActivatedRoute } from '@angular/router';
import { CategoryElementsService } from './../../servises/category-elements.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'category-elements',
  templateUrl: './category-elements.component.html',
  styleUrls: ['./category-elements.component.css']
})
export class CategoryElementsComponent implements OnInit {
  @Input()
  private id: number;
  @Input()
  private filters = new Filters('','');
  private page = 0;
  private elements: any;
  private content: any[];
  constructor(private service: CategoryElementsService, private rout: ActivatedRoute) { }

  ngOnInit() {
    this.content = [];
  }

  ngOnChanges(){
    this.content = [];
    this.page = 0;
    this.loadElements();
  }

  addElementsStr(): string{
    let res: string;
    let count = this.elements.totalElements - this.elements.size * (this.elements.number + 1);
    res = 'Загрузить еще ' + ((count == 1 ) ? '1 товар': ((count < this.elements.number) ? count : this.elements.number) + ' товара');
    return res;
  }

  loadElements(){
    if(!this.id){
      this.rout.paramMap.
      subscribe(params =>{
        this.id = +params.get("id");
      });
    }

    if(this.id){
      if(this.filters){
        if(!this.filters.priceTo)
          this.filters.priceTo = 999999;
        else 
          this.filters.priceTo = +this.filters.priceTo;

        if(!this.filters.priceFrom)
          this.filters.priceFrom = 0;
        else 
          this.filters.priceFrom = +this.filters.priceFrom;
      }else{
          this.filters.priceTo = 999999;
          this.filters.priceFrom = 0;
      }

      this.service.getElements(this.id, this.page++, this.filters)
        .subscribe(responce =>{
          this.elements = responce.json();
          for(let i=0;i<this.elements.content.length;i++){
            this.content[this.content.length] = this.elements.content[i];
          }
        });
    }
  }
}
