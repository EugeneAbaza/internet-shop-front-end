import { Http, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class SearchService {
  private url = 'http://localhost:8080/goods/search';

  constructor(private http: Http) { }

  get(title){
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});
    return this.http.post(this.url, title, options);
  }
}
