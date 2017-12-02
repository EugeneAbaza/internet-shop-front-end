import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CookieService } from '../../servises/cookie.service';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private router: Router, private cookie: CookieService) { }

  ngOnInit() {
  }

  search(value){
    this.cookie.setCookie('search', value, 1);
    this.router.navigate(['search']);
  }

}
