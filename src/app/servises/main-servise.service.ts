import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class MainServiseService {

  private url = 'http://safe-springs-87091.herokuapp.com';
  
  constructor(private http: HttpClient) { 
  }

  get(){
    return this.http.get(this.url + '/main');
  }

  getTop(){
    return this.http.get(this.url + '/main/top');
  }

  getNewest(){
    return this.http.get(this.url + '/main/newest');
  }

  getDiscount(){
    return this.http.get(this.url + '/main/discount');
  }

}
