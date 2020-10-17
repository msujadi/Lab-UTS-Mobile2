import { Product } from './product.model';

export interface Cpu extends Product{
    baseClock:number,
    boostClock: number,
    core:number,
    thread:number
}