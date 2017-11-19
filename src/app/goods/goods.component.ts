import { Goods } from './../model/goods';
import { ActivatedRoute } from '@angular/router';
import { GoodsService } from './../servises/goods.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-goods',
  templateUrl: './goods.component.html',
  styleUrls: ['./goods.component.css']
})
export class GoodsComponent implements OnInit {
  private goods: Goods = new Goods();
  private tab: number = 1;
  constructor(private service: GoodsService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap
      .subscribe(param =>{
        let id = +param.get('id');
        this.service.get(id)
          .subscribe(response =>{
            this.goods = response.json();
          });
      });
  }

  changeTab(num: number){
    this.tab = num;
  }

}
