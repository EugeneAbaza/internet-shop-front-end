import { UserService } from './../servises/user.service';
import { Component, OnInit } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  private users: any = [];
  private index = 0;
  constructor(private userService: UserService) { }

  ngOnInit() {
   
  }

  onLinkClick(event: MatTabChangeEvent){
    switch(event.index){
      case 0:
        this.userService.getAll()
        .subscribe(res =>{
          this.users = res;
        });
        break;
    }
  }
}
