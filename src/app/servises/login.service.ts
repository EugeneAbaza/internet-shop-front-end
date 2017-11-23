import { CookieService } from './cookie.service';
import { User } from './../model/user';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {
  private redirectUrl: string;
  private url = 'http://localhost:8080/account/';
  private isLoggedIn: boolean;

  constructor(private http: Http, private cookie: CookieService) {
    this.isLoggedIn = false;
   }

  registration(user){
    let u = new User(user.email, user.pass, user.firstName, user.lastName, user.patronymic, 0);
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});
    return this.http.post(this.url + 'registration', u, options);
  }

  auth(user){
    let u = new User(user.email, user.pass, null, null, null, 0);
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});
    return this.http.post(this.url + 'login', u, options);
  }

  setRedirectUrl(url: string){
    this.redirectUrl = url;
  }

  getRedirectUrl():string{
    return this.redirectUrl;
  }

  isUserLoggedIn():boolean{
    return this.isLoggedIn;
  }

  logOutUser():void {
    this.isLoggedIn = false;
    this.cookie.deleteCookie('email');
    this.cookie.deleteCookie('password');
  }

  logInUser():void{
    this.isLoggedIn = true;
  }

}
