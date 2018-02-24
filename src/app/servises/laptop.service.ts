import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class LaptopService {
  private url = 'http://safe-springs-87091.herokuapp.com/goods/laptop/'
  constructor(private http: HttpClient) { }

  get(id: number){
    return this.http.get(this.url + id);
  }
}
