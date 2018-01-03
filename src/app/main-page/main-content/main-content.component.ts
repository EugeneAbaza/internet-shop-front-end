import { Goods } from './../../model/goods';
import { MainServiseService } from './../../servises/main-servise.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {
  @Input() title: string;
  @Input() items: Goods[] = [];

  constructor(
    /*private mainServise: MainServiseService*/) { 
  }

  ngOnInit() {
    /*if(this.title === 'НОВИНКИ'){
      this.mainServise.getNewest()
      .subscribe(response =>{
        this.items = response.json();
      });
    } else if(this.title === 'ТОП ПРОДАЖ'){
      this.mainServise.getTop()
      .subscribe(response =>{
        this.items = response.json();
      });
    } else if(this.title === 'АКЦИИ'){
      this.mainServise.getDiscount()
      .subscribe(response =>{
        this.items = response.json();
      });
    }*/
  }

}
