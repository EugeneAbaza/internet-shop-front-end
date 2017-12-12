import { Http,RequestOptions,Headers } from '@angular/http';
import { Injectable } from '@angular/core';



@Injectable()
export class CommentsService {
  private url = 'http://localhost:8080/comments/';



  constructor(private http: Http) { }




  get(id: number){
    return this.http.get(this.url + id);
  }




  post(post){
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});
    return this.http.post(this.url + '/add', post, options);
 
 }



}
