import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.css']
})
export class DeliveryComponent implements OnInit {
  private tab = true;
  constructor() { }

  ngOnInit() {
  }

  changeTab(){
    this.tab = !this.tab;
  }

}
