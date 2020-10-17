import { Product } from './product.model';

export interface Motherboard extends Product{
    chipset:string,
    tipeProcessor:string,
}