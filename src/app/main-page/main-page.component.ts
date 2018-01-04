import { MainServiseService } from './../servises/main-servise.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  mainContentHeaders = ['ТОП ПРОДАЖ', 'НОВИНКИ', 'АКЦИИ' ];
  private map;
  private newest = [];
  private top = [];
  private discount = [];

  constructor(private service: MainServiseService) { }

  ngOnInit() {
    this.service.get()
      .subscribe(res =>{
        console.log(res);
        //this.map = res['results'];
        this.top = res['top'];
        this.newest = res['newest'];
        this.discount = res['discount'];
      });
  }

}
