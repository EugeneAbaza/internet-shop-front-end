import { GoodsCartService } from './../../servises/goods-cart.service';
import { CookieService } from './../../servises/cookie.service';
import { Router } from '@angular/router';
import { LoginService } from './../../servises/login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.css']
})
export class MainHeaderComponent implements OnInit {

  constructor(private service: LoginService, private router: Router, private cookie: CookieService, private goodsCart: GoodsCartService) {
   }

  ngOnInit() {
    let goods = JSON.parse(this.cookie.getCookie('goods-cart'));
    if(!goods)
      goods = [];
    
    this.goodsCart.setCount(goods.length);
  }

  logOut():void{
    this.service.logOutUser();
    if(this.router.url == '/office')
      this.router.navigate(['']);
  }

}
