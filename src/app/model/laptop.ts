import { Goods } from './goods';

export class Laptop{
    id: number;
    goods: Goods;
    screen: number;
    screenType: String;
    resolution: String;
    multiTouch: boolean;
    color: string;
    ram: number;
    hdd: number;
    ssd: number;
    os: string;
    wifi: boolean;
    bluetooth: string;
    webCam: boolean;
    weight: number;
    cpuName: string;
    cpuModel: string;
    cpuFrequencyMin: number;
    cpuFrequencyMax: number;
    cpuCountOfCores: number;
    discreteGraphics: boolean;
    gpuName: string;
    gpuModel: string;
    gpuRam: number;
    lan: boolean;

    constructor(){
        this.goods = new Goods();
    }
}