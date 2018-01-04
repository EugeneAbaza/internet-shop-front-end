import { CookieService } from './../servises/cookie.service';
import { SearchService } from './../servises/search.service';
import { Goods } from './../model/goods';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {
  private goods: Goods[] = [];
  private load: boolean = false;
  private response;
  private title;

  constructor(private service: SearchService, private cookie: CookieService) { }

  ngOnInit() {
    this.title = this.cookie.getCookie('search');
    this.sr();
  }

  search(v){
    this.title = v;
    this.sr();
  }

  sr(){
    if(this.title){
      this.cookie.setCookie('search', '', -1);
      this.service.get(this.title)
        .subscribe(res =>{
          this.response = res;
          this.goods = this.response.content;
          console.log(this.goods);
        });
    }

    this.load = true;
  }
}
