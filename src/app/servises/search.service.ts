import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class SearchService {
  private url = 'http://safe-springs-87091.herokuapp.com/goods/search';

  constructor(private http: HttpClient) { }

  get(title){
    return this.http.post(this.url, title, {
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    });
  }
}
