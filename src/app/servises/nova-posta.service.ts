import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class NovaPostaService {
  private url = 'https://api.novaposhta.ua/v2.0/json/';
  constructor(private http:HttpClient) { }

  public getCities(){
    return this.http.post(this.url, {
      "modelName": "Address",
      "calledMethod": "getCities",
    
        "apiKey": "70a890d3545cf50680bf12ccaa6320b1"
    });
  }

  getDepartments(){
    return this.http.post(this.url, {
      "modelName": "AddressGeneral",
      "calledMethod": "getWarehouses",
      "methodProperties": {
           "Language": "ru"
      },
  
      "apiKey": "70a890d3545cf50680bf12ccaa6320b1"
    });
  }

}
