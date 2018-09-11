import { User } from './user';
import { Data } from '@angular/router/src/config';

export class Order {
    constructor(private id: number,
        private user: User,
        private paymentType: string,
        private paid: boolean,
        private deliveredCity: string,
        private postDepartment: string,
        private date: Data,
        private summa: number,
        public goodsList:any[]){}
}