import { Goods } from './goods';

export class Cpu{
    id: number;
    name: string;
    model: string;
    frequencyMin: number;
    frequencyMax: number;
    countOfCores: number;
    vendor: string;
    goods: Goods;
    generation: String;
    busFrequency: number;
    unlockedMultiplier: boolean;
    TDP: number;

    constructor(){
        this.goods = null;
    }
}