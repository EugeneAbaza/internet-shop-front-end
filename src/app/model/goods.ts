import { Vendor } from './vendor';
import { Category } from './category';

export class Goods{
    id: number;
    name: string;
    price: number;
    quantity: number;
    reservedCount: number;
    category: Category;
    discount: number;
    image: string;
    vendor: Vendor;
    shortDescription: string;
    date: Date;
    sales: number;

    constructor(){
        this.category = new Category();
    }
}