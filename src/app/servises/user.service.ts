import { User } from './../model/user';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserService {
  private url = 'http://localhost:8080/account';

  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get(this.url + '/all');
  }

  changeRole(id: number){
    return this.http.get(this.url + '/change/' + id);
  }

  checkEmail(email: string){
    return this.http.post(this.url + '/exist', {email: email});
  }

  confirmation(email: string){
    return this.http.post(this.url + '/confirmation', {email: email});
  }

  changePassword(user: User){
    return this.http.post(this.url + '/password', user);
  }
}
