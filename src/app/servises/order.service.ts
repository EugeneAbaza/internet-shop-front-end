import { Http, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class OrderService {
  private url = 'http://localhost:8080/orders/';

  constructor(private http: Http) { }

  get(id: number){
    return this.http.get(this.url + id);
  }

  create(order){
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});
    return this.http.post(this.url + 'create', order, options);
  }

}
