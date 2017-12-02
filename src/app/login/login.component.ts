import { CookieService } from './../servises/cookie.service';
import { LoginService } from './../servises/login.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBarModule, MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private hide = true;
  private active = 1;
  constructor(private service: LoginService, private cookie: CookieService, private router: Router, public snakBar: MatSnackBar) { }

  ngOnInit() {
    let e = this.cookie.getCookie('email');
    let p = this.cookie.getCookie('password');
    if(e && p){
      this.logIn({email: e, pass: p})
    }
  }

  changeTab(num:number){
    this.active = num;
  }

  logIn(val){
    this.service.auth(val)
      .subscribe(res =>{
        let result = res.json();
        if(result == 0){
          this.cookie.setCookie('email', val.email, 30);
          this.cookie.setCookie('password', val.pass, 30);
          this.service.logInUser();
          this.router.navigate([this.service.getRedirectUrl() || '']);
        } else if(result == 1 || result == 2) {
          this.snakBar.open('Неверный email или пароль', 'Закрыть', {duration: 2000});
        }
      });
  }

  reg(val){
    this.service.registration(val)
      .subscribe(resp =>{
        let result = resp.json();
        if(result == 0){
          this.cookie.setCookie('email', val.email, 30);
          this.cookie.setCookie('password', val.password, 30);
          this.service.logInUser();
          this.router.navigate([this.service.getRedirectUrl() || '']);  
        } else if(result == 1){
          this.snakBar.open('Пользователь ст каим email уже зарегистрирован', 'Закрыть', {duration: 2000});
        }
      });
  }

}
