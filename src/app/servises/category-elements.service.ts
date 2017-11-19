import { Http, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class CategoryElementsService {

  private url = 'http://localhost:8080/goods/category';
  constructor(private http: Http) { }

  getElements(id: number, page: number){
    return this.http.get(this.url + '/' + id + '?' + 'page=' + page);
  }

}
