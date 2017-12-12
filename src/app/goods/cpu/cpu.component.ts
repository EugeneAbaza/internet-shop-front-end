import { Cpu } from './../../model/cpu';
import { CpuService } from './../../servises/cpu.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cpu',
  templateUrl: './cpu.component.html',
  styleUrls: ['./cpu.component.css']
})
export class CpuComponent implements OnInit {
  private cpu: Cpu;
  private load = false;
  constructor(private route: ActivatedRoute, private service: CpuService) { }

  ngOnInit() {
    this.route.paramMap
      .subscribe(par =>{
        let id = +par.get('id');
        this.service.get(id)
          .subscribe(response =>{
              this.cpu = response.json();
              this.load = true;
          });
      });
  }

}
