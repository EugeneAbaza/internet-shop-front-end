import { Laptop } from './../../model/laptop';
import { LaptopService } from './../../servises/laptop.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'laptop',
  templateUrl: './laptop.component.html',
  styleUrls: ['./laptop.component.css']
})
export class LaptopComponent implements OnInit {
  private id: number;
  private laptop;
  private load = false;
  constructor(private route: ActivatedRoute, private service: LaptopService) { }

  ngOnInit() {
    this.route.paramMap
      .subscribe(par =>{
        this.id = +par.get('id');
        console.log(this.id);
        this.service.get(this.id)
          .subscribe(response =>{
            this.laptop = response;
            this.load = true;
          });
      });
  }

}
