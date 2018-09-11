import { Order } from './../model/order';
import { OrderService } from './../servises/order.service';
import { LoginService } from './../servises/login.service';
import { CookieService } from './../servises/cookie.service';
import { Component, OnInit } from '@angular/core';
import { User } from './../model/user';

@Component({
  selector: 'app-private-office',
  templateUrl: './private-office.component.html',
  styleUrls: ['./private-office.component.css']
})
export class PrivateOfficeComponent implements OnInit {
  private user;
  private tab = true;
  private orderModel = [];

  constructor(private service: CookieService, private login: LoginService, private order: OrderService) { }

  ngOnInit() {
    let email = this.service.getCookie('email');

    this.login.getUser(email)
      .subscribe(res =>{
        this.user = res;
        this.user.password = null;

        if(this.user && this.user.id){
          this.order.get(this.user.id)
            .subscribe(responce =>{
                let i = 0;
                while(true){
                  if(responce[i]){
                    this.orderModel.push(responce[i++]);
                  } else {
                    break;
                  }
                }
            });
        }
      });
  }

  changeTab(){
    this.tab = !this.tab;
  }

}
