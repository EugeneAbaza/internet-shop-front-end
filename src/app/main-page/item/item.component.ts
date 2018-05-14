import { GoodsCartService } from './../../servises/goods-cart.service';
import { Goods } from './../../model/goods';
import { Component, OnInit, Input } from '@angular/core';
import { CookieService } from '../../servises/cookie.service';

@Component({
  selector: 'item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() private item: Goods;

  constructor(private cookie: CookieService, private goodsCart: GoodsCartService) { }

  ngOnInit() {
  }

  addToGoodsCart(e){
    e.stopPropagation();
    let flag = true;
    let goods = JSON.parse(this.cookie.getCookie('goods-cart'));
    if(!goods)
      goods = [];

    for(let i=0;i<goods.length;i++){
      if(goods[i].id == this.item.id){
          flag = false;
          goods.splice(i, 1);
      }
    } 
    
    if(flag)
      goods.push(this.item);

    this.cookie.setCookie('goods-cart', JSON.stringify(goods), 30);
    this.goodsCart.setCount(goods.length);
  }

  updateStatus(): string{
    let goods = JSON.parse(this.cookie.getCookie('goods-cart'));
    if(!goods)
      return 'В корзину';

    for(let i=0;i<goods.length;i++){
      if(goods[i].id == this.item.id)
          return 'Удалить из корзины';
    }
    
    return 'Удалить из корзины';
  }

}
