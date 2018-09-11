import { UserService } from './../servises/user.service';
import { Component, OnInit, Input,  OnChanges, SimpleChange } from '@angular/core';

@Component({
  selector: 'dashboard-users',
  templateUrl: './dashboard-users.component.html',
  styleUrls: ['./dashboard-users.component.css']
})
export class DashboardUsersComponent implements OnInit {
  @Input()
  private users: any = [];

  constructor(private service: UserService) { }

  ngOnInit() {
    this.service.getAll()
      .subscribe(res => {
        this.users = res;
      });
  }

  ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
    
    for (let propName in changes) {
      let changedProp = changes[propName];
      this.users = changedProp.currentValue;
    }
    
  }

  changeRole(id: number){
    this.service.changeRole(id)
      .subscribe(res => {
        for(let i =0; i<this.users.length; i++){
          if(this.users[i]['id'] == res['id']){
            this.users[i] = res;
            break;
          }
        }
      });
  }

}
