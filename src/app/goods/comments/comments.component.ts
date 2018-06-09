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
  private comments = [];
  private state: boolean = false;
  private id: number;
  private months = ['января','февраля','марта','апреля','мая','июня','июля','августа','сентября','октября','ноября','декабря'];
  constructor(private service: CommentsService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap
      .subscribe(par =>{
        this.id = +par.get('id');
        this.service.get(this.id)
          .subscribe(res =>{
            let i =0;
            
            while(true){
              if(res[i]){
                this.comments.push(res[i++]);    
              }else {
                break;
              }
            }
          });
      });
  }

  addComment(f){
    let c = f.value;
    let comment = new Comments(null, this.id, c.comment, c.name, new Date());
    this.service.post(comment)
      .subscribe(res =>{
        if(res!=null){
          this.comments.push(res); //add new comment to the list of comments
      
          f.setValue({ //clear the comment fields
            name: '',
            comment: ''
          });
          this.state = false; //close the comment field
        }
      });
  }

  getStringDate(date: string){
    let d = date.split('-');
    return d[2] + ' ' + this.months[+d[1] - 1] + ' ' + d[0];
  }

}
