import { Router } from '@angular/router';
import { OrderService } from './../servises/order.service';
import { LoginService } from './../servises/login.service';
import { Order } from './../model/order';
import { Goods } from './../model/goods';
import { User } from './../model/user';
import { GoodsCartService } from './../servises/goods-cart.service';
import { CookieService } from './../servises/cookie.service';
import { Component, OnInit } from '@angular/core';
import { MatSnackBarModule, MatSnackBar } from '@angular/material/snack-bar';
import { NovaPostaService } from '../servises/nova-posta.service';
//import { setTimeout } from 'timers';

@Component({
  selector: 'app-make-order',
  templateUrl: './make-order.component.html',
  styleUrls: ['./make-order.component.css']
})
export class MakeOrderComponent implements OnInit {

  private goods: Goods[];
  private ms = document.getElementsByTagName('input');
  private cities = [];
  private filteredCities = [];
  private departmens = [];
  private filteredDepartmens = [];
  private flag = false;
  private payment: string;

  constructor(private cookie: CookieService, 
              private servise: GoodsCartService, 
              private login: LoginService,
              private order: OrderService,
              public snakBar: MatSnackBar,
              private router: Router,
              private npService: NovaPostaService) { }

  ngOnInit() {
    this.goods = JSON.parse(this.cookie.getCookie('goods-cart'));
    if(!this.goods)
      this.goods = [];

    this.loadCities();
    this.loadDepartmens();
  }

  send(){
    let temp = (!this.ms[0].value || !this.ms[1].value || !this.goods || !this.payment) ? false : true;

    if(!temp){
      if(!this.goods)
        this.snakBar.open('Сперва выберите товар', '', {duration: 2000});
      else
        this.snakBar.open('Заполните все поля', '', {duration: 2000});
      return;
    }

    temp = false;

    for(let c of this.cities){
      if(c.DescriptionRu == this.ms[0].value){
        temp = true;
        break;
      }
    }

    if(temp){
      temp = false;
      for(let d of this.filteredDepartmens){
        if(d.DescriptionRu == this.ms[1].value){
          temp = true;
          break;
        }
      }
    }
        
    if(!temp){
      this.snakBar.open('Почтовые данные не корректные', '', {duration: 2000});
      return;
    }

    let orderList = [];
    for(let i=0;i<this.goods.length;i++)
      orderList[i] = {id: null, order: null, goods: this.goods[i], count: +this.ms[i+4].value};

    this.login.getUser(this.cookie.getCookie('email'))
      .subscribe(res =>{
        let order = new Order(null, 
                      <User> res, 
                      this.payment, 
                      false, 
                      this.ms[0].value, 
                      this.ms[1].value, 
                      new Date(), 
                      this.sum(), 
                      orderList);
       
        this.order.create(order)
          .subscribe(resp => {
            console.log(resp);
            if(+resp == 0){
              this.snakBar.open('Заказ оформлен.', '', {duration: 2000});
              this.cookie.setCookie('goods-cart', JSON.stringify([]), 30);
              this.servise.setCount(0);
              setTimeout(()=>{this.router.navigate([''])}, 2000);
            }
          });
      });
  }

  sum(){
    let res = 0;
    for(let i=0;i<this.goods.length;i++)
      res+= ((this.goods[i].price - this.goods[i].discount) * +this.ms[i+4].value);
    return res;
  }

  subm(f){
    let orderList = [];
    for(let i=0;i<this.goods.length;i++)
      orderList[i] = {id: null, order: null, goods: this.goods[i], count: +this.ms[i+4].value};

    this.login.getUser(this.cookie.getCookie('email'))
      .subscribe(res =>{
        let order = new Order(null, 
                      <User> res, 
                      "Наличными", 
                      false, 
                      f.deliveredCity, 
                      f.postOfficeNumber, 
                      new Date(), 
                      this.sum(), 
                      orderList);
       
        this.order.create(order)
          .subscribe(resp => {
            if(resp == 0){
              this.snakBar.open('Заказ оформлен.', '', {duration: 2000});
              this.cookie.setCookie('goods-cart', JSON.stringify([]), 30);
              this.servise.setCount(0);
              setTimeout(()=>{this.router.navigate([''])}, 2000);
            }
          });
      });
    
  }

  plus(i){
    this.ms[i+4].value = (+this.ms[i+4].value + 1) + '';
  }

  minus(i){
    let num = +this.ms[i+4].value - 1;
    if(num > 0)
      this.ms[i+4].value = num + '';
  }

  remove(i) {
    this.goods.splice(i, 1);
    this.servise.setCount(this.goods.length);
    this.cookie.setCookie('goods-cart', JSON.stringify(this.goods), 30);
  }

  loadCities(){
    this.npService.getCities()
      .subscribe(res => {
        this.cities = res['data'];
        this.filteredCities = this.cities.slice();
        this.filteredCities.splice(10);
      });
  }

  filterCities(data){
    let temp = this.cities.slice();
    let newArr = [];
    for(let i=0; i<temp.length; i++){
      if(temp[i]['DescriptionRu'].toLowerCase().startsWith(data.toLowerCase())){
        newArr.push(temp[i]);
      }

      if(newArr.length == 10)
        break;
    }

    this.filteredCities = newArr;
  }

  loadDepartmens(){
    this.npService.getDepartments()
      .subscribe(res => {
        this.departmens = res['data'];
      });
  }

  filterDepartmens(name){
    for(let city of this.filteredCities){
      if(name.toLowerCase() == city['DescriptionRu'].toLowerCase()){
        this.flag = true;
        break;
      }
    }

    if(this.flag){
      this.filteredDepartmens = [];
      for(let dep of this.departmens){
        if(dep['CityDescriptionRu'] == name)
          this.filteredDepartmens.push(dep);
      }
    }
  }
}
