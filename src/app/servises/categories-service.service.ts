import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class CategoriesServiceService {
  private url = 'http://localhost:8080/';

  constructor(private http: HttpClient) { }

  getCategories(){
    return this.http.get(this.url + '/categories');
  }

}
