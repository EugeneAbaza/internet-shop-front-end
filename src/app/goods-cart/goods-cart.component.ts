import { GoodsCartService } from './../servises/goods-cart.service';
import { CookieService } from './../servises/cookie.service';
import { Goods } from './../model/goods';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'goods-cart',
  templateUrl: './goods-cart.component.html',
  styleUrls: ['./goods-cart.component.css']
})
export class GoodsCartComponent implements OnInit {
  goods: Goods[] = [];
  constructor(private cookie: CookieService, private goodsCart: GoodsCartService) { }

  ngOnInit() {
    this.goods = JSON.parse(this.cookie.getCookie('goods-cart'));  
  }

  sum(): number{
    let res = 0;
    for(let i=0;i<this.goods.length;i++)
      res+=this.goods[i].price;
    return res;
  }

  remove(id){
    for(let i=0;i<this.goods.length;i++){
      if(this.goods[i].id == id){
        this.goods.splice(i, 1);
        break;
      }
    }

    this.goodsCart.setCount(this.goods.length);
    this.cookie.setCookie('goods-cart', JSON.stringify(this.goods), 30);
  }

  clear(){
    this.goods = [];
    this.goodsCart.setCount(this.goods.length);
    this.cookie.setCookie('goods-cart', JSON.stringify(this.goods), 30);
  }


}
