import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class CategoriesServiceService {
  private url = 'https://safe-springs-87091.herokuapp.com';

  constructor(private http: HttpClient) { }

  getCategories(){
    return this.http.get(this.url + '/categories');
  }

}
