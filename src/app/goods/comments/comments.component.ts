import { ActivatedRoute } from '@angular/router';
import { Comments } from './../../model/comments';
import { CommentsService } from './../../servises/comments.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  private comments: Comments[] = [];

  constructor(private service: CommentsService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap
      .subscribe(par =>{
        let id = +par.get('id');
        this.service.get(id)
          .subscribe(res =>{
            this.comments = res.json();
            /*this.comments.forEach(c =>{
              c.date = new Date(c.date);
            });*/
          });
      });
  }

}
