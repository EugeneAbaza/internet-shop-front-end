import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  mainContentHeaders = ['ТОП ПРОДАЖ', 'НОВИНКИ', 'АКЦИИ' ];
  constructor() { }

  ngOnInit() {
  }

}
