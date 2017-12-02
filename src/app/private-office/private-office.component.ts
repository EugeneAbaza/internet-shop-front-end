import { LoginService } from './../servises/login.service';
import { CookieService } from './../servises/cookie.service';
import { Component, OnInit } from '@angular/core';
import { User } from './../model/user';

@Component({
  selector: 'app-private-office',
  templateUrl: './private-office.component.html',
  styleUrls: ['./private-office.component.css']
})
export class PrivateOfficeComponent implements OnInit {
  private user: User = null;
  
  constructor(private service: CookieService, private login: LoginService) { }

  ngOnInit() {
    let email = this.service.getCookie('email');

    this.login.getUser(email)
      .subscribe(res =>{
        this.user = res.json();
        this.user.password = null;
      });
  }

}
