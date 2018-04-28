import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class CpuService {
  private url = 'http://localhost:8080/goods/cpu/';

  constructor(private http: HttpClient) { }

  get(id: number){
    return this.http.get(this.url + id);
  }
}
