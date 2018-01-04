import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class OrderService {
  private url = 'http://localhost:8080/orders/';

  constructor(private http: HttpClient) { }

  get(id: number){
    return this.http.get(this.url + id);
  }

  create(order){
    return this.http.post(this.url + 'create', order, {
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    });
  }

}
