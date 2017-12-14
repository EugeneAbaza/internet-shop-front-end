import { Router } from '@angular/router';
import { OrderService } from './../servises/order.service';
import { LoginService } from './../servises/login.service';
import { Order } from './../model/order';
import { Goods } from './../model/goods';
import { GoodsCartService } from './../servises/goods-cart.service';
import { CookieService } from './../servises/cookie.service';
import { Component, OnInit } from '@angular/core';
import { MatSnackBarModule, MatSnackBar } from '@angular/material/snack-bar';
//import { setTimeout } from 'timers';

@Component({
  selector: 'app-make-order',
  templateUrl: './make-order.component.html',
  styleUrls: ['./make-order.component.css']
})
export class MakeOrderComponent implements OnInit {

  private goods: Goods[];
  private ms = document.getElementsByTagName('input');

  constructor(private cookie: CookieService, 
              private servise: GoodsCartService, 
              private login: LoginService,
              private order: OrderService,
              public snakBar: MatSnackBar,
              private router: Router) { }

  ngOnInit() {
    this.goods = JSON.parse(this.cookie.getCookie('goods-cart'));
  }

  sum(): number{
    let res = 0;
    for(let i=0;i<this.goods.length;i++)
      res+= ((this.goods[i].price - this.goods[i].discount) * +this.ms[i].value);
    return res;
  }

  countOfEl(){
    let res = 0;
    for(let i=0;i<this.goods.length;i++)
      res+= (1 * +this.ms[i].value);
    return res;
  }

  subm(f){
    let orderList = [];
    for(let i=0;i<this.goods.length;i++)
      orderList[i] = {id: null, order: null, goods: this.goods[i], count: +this.ms[i].value};

    this.login.getUser(this.cookie.getCookie('email'))
      .subscribe(res =>{
        let order = new Order(null, 
                      res.json(), 
                      "Наличными", 
                      false, 
                      f.deliveredCity, 
                      f.postOfficeNumber, 
                      new Date(), 
                      this.sum(), 
                      orderList);
       
        this.order.create(order)
          .subscribe(resp => {
            if(resp.json() == 0){
              this.snakBar.open('Заказ оформлен.', '', {duration: 2000});
              this.cookie.setCookie('goods-cart', JSON.stringify([]), 30);
              this.servise.setCount(0);
              setTimeout(()=>{this.router.navigate([''])}, 2000);
            }
          });
      });
    
  }

  plus(i){
    this.ms[i].value = (+this.ms[i].value + 1) + '';
  }

  minus(i){
    let num = +this.ms[i].value - 1;
    if(num > 0)
      this.ms[i].value = num + ''; 
  }
}
