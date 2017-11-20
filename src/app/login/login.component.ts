import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private active = 1;
  constructor() { }

  ngOnInit() {
  }

  changeTab(num:number){
    this.active = num;
  }

  logIn(x){
    console.log(x);
  }

  reg(x){
    console.log(x);
  }

}
