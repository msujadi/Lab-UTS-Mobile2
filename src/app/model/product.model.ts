export interface Product{
    id: string,
    merek: string,
    model:string,
    description?: string,
    imageUrl: string,
    price: number,
    stok:number,
    type: string
}