import { Injectable } from '@angular/core';

@Injectable()
export class GoodsCartService {
  private count: number;
  constructor() {
    this.count = 0;
   }

   setCount(count: number){
     this.count = count;
   }

   getCount(): number{
     return this.count;
   }

}
