import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class GoodsService {
  private url = 'http://localhost:8080/goods/'

  constructor(private http: Http) { }

  get(id: number){
    return this.http.get(this.url + id);
  }
}
