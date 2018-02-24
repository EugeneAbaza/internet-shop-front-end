import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class CategoriesServiceService {
<<<<<<< HEAD
  private url = 'https://safe-springs-87091.herokuapp.com';
=======
  private url = 'http://safe-springs-87091.herokuapp.com';
>>>>>>> dev2

  constructor(private http: HttpClient) { }

  getCategories(){
    return this.http.get(this.url + '/categories');
  }

}
