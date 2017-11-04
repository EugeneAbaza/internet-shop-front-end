import { ActivatedRoute } from '@angular/router';
import { CategoryElementsService } from './../../servises/category-elements.service';
import { Component, OnInit, Input, OnDestroy } from '@angular/core';

@Component({
  selector: 'category-elements',
  templateUrl: './category-elements.component.html',
  styleUrls: ['./category-elements.component.css']
})
export class CategoryElementsComponent implements OnInit, OnDestroy {
  @Input()
  private id: number;
  private page = 0;
  private elements: any;
  private content: any[];
  constructor(private service: CategoryElementsService, private rout: ActivatedRoute) { }

  ngOnInit() {
    this.content = [];
  }

  ngOnDestroy() { console.log(`onDestroy`); }

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
      this.service.getElements(this.id, this.page++)
        .subscribe(responce =>{
          this.elements = responce.json();
          for(let i=0;i<this.elements.content.length;i++){
            this.content[this.content.length] = this.elements.content[i];
          }
        });
    }
  }
}
