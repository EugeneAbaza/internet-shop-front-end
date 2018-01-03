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
        this.map = res.json();
        this.top = this.map['top'];
        this.newest = this.map['newest'];
        this.discount = this.map['discount'];
      });
  }

}
