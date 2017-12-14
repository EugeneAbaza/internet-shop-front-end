import { GoodsCartService } from './../servises/goods-cart.service';
import { CookieService } from './../servises/cookie.service';
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
  private load = false;
  private tab: number = 1;
  private id = 0;
  constructor(private service: GoodsService, private route: ActivatedRoute, private cookie: CookieService, 
              private goodsCart: GoodsCartService) { }

  ngOnInit() {
    this.route.paramMap
      .subscribe(param =>{
         this.id = +param.get('id');
        this.service.get(this.id)
          .subscribe(response =>{
            this.goods = response.json();
            this.load = true;
          });
      });
  }

  addToGoodsCart(){
    let flag = true;
    let goods = JSON.parse(this.cookie.getCookie('goods-cart'));
    if(!goods)
      goods = [];

    for(let i=0;i<goods.length;i++){
      if(goods[i].id == this.id){
          flag = false;
          goods.splice(i, 1);
      }
    }

    if(flag)
      goods.push(this.goods);

    this.cookie.setCookie('goods-cart', JSON.stringify(goods), 30);

    this.goodsCart.setCount(goods.length);
  }

  updateStatus(){
    let goods = JSON.parse(this.cookie.getCookie('goods-cart'));
    if(!goods)
      return 'В корзину';

    for(let i=0;i<goods.length;i++){
      if(goods[i].id == this.goods.id)
          return 'Удалить с корзины';
    }

    return 'В корзину';
  }

  changeTab(num: number){
    this.tab = num;
  }

}
