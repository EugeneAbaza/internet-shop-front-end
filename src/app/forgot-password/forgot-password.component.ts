import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginService } from './../servises/login.service';
import { UserService } from './../servises/user.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  private step = 1;
  private code: any;
  private email;
  private hide = true;

  constructor(private service: UserService, 
              private login: LoginService, 
              private router: Router,
              private snakBar: MatSnackBar) { }

  ngOnInit() {
  }

  checkEmail(data){
    this.email = data.email;
    this.service.checkEmail(this.email)
      .subscribe(res => {
        if(res != null){
          this.service.confirmation(this.email)
            .subscribe(res=> {
              this.step++;
              this.code = res;
            });
        } else {
          this.snakBar.open('Email не зарегистрирован в системе', 'Закрыть', {duration: 2000});
        }
      });
  }

  createNewPassword(data){
    if(data.code == this.code){
      const user = new User(this.email, data.pass, null, null, null, null, null);
      this.service.changePassword(user)
        .subscribe(res => {
          this.router.navigate(['']);   
        });
    }
  }
}
