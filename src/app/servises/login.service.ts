import { CookieService } from './cookie.service';
import { User } from './../model/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {
  private redirectUrl: string;
  private url = 'http://localhost:8080/account/';
  private isLoggedIn: boolean;
  private isAdmin: boolean;
  private email = '';

  constructor(private http: HttpClient, private cookie: CookieService) {
    this.isLoggedIn = false;
    this.isAdmin = false;
   }

  registration(user){
    let u = new User(user.email, user.pass, user.firstName, user.lastName, user.patronymic, 0, 'user');
    this.email = user.email;
   // let headers = new Headers({'Content-Type': 'application/json'});
    //let options = new RequestOptions({headers: headers});
    return this.http.post(this.url + 'registration', u, {
      headers: new HttpHeaders().set('Content-Type', 'application/json'),
      responseType: 'text'
    });
  }

  auth(user){
    let u = new User(user.email, user.pass, null, null, null, 0, null);
    this.email = user.email;
    return this.http.post(this.url + 'login', u, {
      headers: new HttpHeaders().set('Content-Type', 'application/json'),
      responseType: 'text' 
    });
  }

  getUser(email){
    return this.http.post(this.url + 'user', email, {
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    });
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
    this.isAdmin = false;
    this.cookie.deleteCookie('email');
    this.cookie.deleteCookie('password');
  }

  logInUser():void{
    this.isLoggedIn = true;
    this.isUserAdmin();
  }

  isUserAdmin(): boolean {
    if(this.isAdmin)
      return true;
    
    this.getUser(this.email)
      .subscribe(res =>{
        if(res == null)
          return;
        else {
          if(res['role'] == 'admin')
            this.isAdmin = true;
        }
      });

    return this.isAdmin;
  }

}
