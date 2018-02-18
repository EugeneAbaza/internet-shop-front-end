import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class GoodsService {
  private url = 'https://safe-springs-87091.herokuapp.com/goods/'

  constructor(private http: HttpClient) { }

  get(id: number){
    return this.http.get(this.url + id);
  }
}
