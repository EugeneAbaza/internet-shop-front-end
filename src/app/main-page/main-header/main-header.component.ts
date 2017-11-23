import { Router } from '@angular/router';
import { LoginService } from './../../servises/login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.css']
})
export class MainHeaderComponent implements OnInit {

  constructor(private service: LoginService, private router: Router) {
   }

  ngOnInit() {
  }

  logOut():void{
    this.service.logOutUser();
    if(this.router.url == '/office')
      this.router.navigate(['']);
  }

}
