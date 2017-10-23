import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {
  @Input() title: string;
  constructor() { 
  }

  ngOnInit() {
  }

}
