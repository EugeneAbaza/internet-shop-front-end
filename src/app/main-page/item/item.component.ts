import { Goods } from './../../model/goods';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() private item: Goods;

  constructor() { }

  ngOnInit() {
  }

}
