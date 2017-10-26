import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';


@Injectable()
export class MainServiseService {

  private url = 'http://localhost:8080';
  private myHeaders;
  private options;
  
  constructor(private http: Http) { 
    this.myHeaders = new Headers();
    this.myHeaders.append('Access-Control-Allow-Origin', '*');
    this.options = new RequestOptions({headers: this.myHeaders});
  }

  getTop(){
    return this.http.get(this.url + '/main/top', this.options);
  }

  getNewest(){
    return this.http.get(this.url + '/main/newest', this.options);
  }

  getDiscount(){
    return this.http.get(this.url + '/main/discount', this.options);
  }

}
