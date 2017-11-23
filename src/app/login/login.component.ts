import { CookieService } from './../servises/cookie.service';
import { LoginService } from './../servises/login.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private active = 1;
  constructor(private service: LoginService, private cookie: CookieService, private router: Router) { }

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
        }
      });
  }

  reg(x){
    let val = x.value;
    console.log(val);
    this.service.registration(val)
      .subscribe(resp =>{
        let result = resp.json();
        if(result == 0){
          this.cookie.setCookie('email', val.email, 30);
          this.cookie.setCookie('password', val.password, 30);
          this.service.logInUser();
          this.router.navigate([this.service.getRedirectUrl() || '']);  
        }
      });
  }

}
